import React, {useState, useEffect, useContext} from 'react'
import authContext from "../../../Context/authContext";
import verifyZipCode from '../../../services/zipCodes.services';
import { signUp } from '../../../services/authentication.services';
import Toaster from '../../core/Toaster';
import { setCurrentUser } from '../../../utils/user';

class FormatDate {
  constructor(inputDate) {
    if(inputDate) {
      if(inputDate.getFullYear()) this.year = inputDate.getFullYear();
      this.month = inputDate.getMonth() + 1;
      this.date = inputDate.getDate();
      if(this.month < 10) this.month = '0'+ this.month; 
      if(this.date < 10) this.date = '0'+ this.date; 
    }
  }

  getFormat1() {
    return `${this.month}-${this.date}-${this.year}`;
  }

  getFormat2() {
    return `${this.year}-${this.month}-${this.date}`;
  }
}

function UserDetails({ handleChange, onPrev, onNext }) {
  
  const { allData, setAllData } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(allData.userDetails);

  const [validationErrors, setValidationErrors] = useState({});
  const [emailAddress, setEmailAddress] = useState(userDetails.email || undefined);
  const [phoneNumber, setPhoneNumber] = useState(userDetails.phoneNumb || undefined);
  const [firstName, setFirstName] = useState(userDetails.firstName || undefined);
  const [lastName, setLastName] = useState(userDetails.lastName || undefined);

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  
  
  const [city, setCity] = useState(userDetails.city || undefined);
  const [state, setState] = useState(userDetails.state || undefined);

  const [cityDisabled, setCityDisabled] = useState(true);
  const [stateDisabled, setStateDisabled] = useState(true);

  const [zipCode, setZipCode] = useState(userDetails.zipCode || undefined);
  const [dateOfBirth, setDateOfBirth] = useState(new FormatDate(new Date(userDetails.yearOfBirth)).getFormat2());
  const [loading, setLoading] = useState(false);
  const [zipLoading, setZipLoading] = useState(false);

  const fetchCityState = async () => {
    let newValidationErrors = {...validationErrors};
    let valid = true;
    if(zipCode) console.log(zipCode.length)
    try {
      setZipLoading(true);
      const data = await verifyZipCode(zipCode);
      // setUserDetails({...userDetails, city: data.city, state: data.state });
      setCity(data.city);
      setState(data.state);
      console.log("Res data", data);
      setLoading(false);
      const newValidationErrors = {...validationErrors};
      delete newValidationErrors.city;
      delete newValidationErrors.state;
      delete newValidationErrors.zipCode;

      setValidationErrors(newValidationErrors);
      setCityDisabled(true);
      setStateDisabled(true);

    }
    catch (err) { 
      newValidationErrors.zipCode = "The entered zip code is not valid";
      valid = false;
      setValidationErrors(newValidationErrors);
    }
    finally {
      setZipLoading(false);
    }
  }

  useEffect(() => {
    setAllData({ ...allData, userDetails });
  }, [userDetails])


  useEffect(() => {
    if(zipCode) {
      if(zipCode.length > 5) setZipCode(zipCode.substring(0,5))
      else if(zipCode.length === 5) fetchCityState();
    }
  }, [zipCode])


  useEffect(() => {
    const yearOfBirth = new FormatDate(new Date(dateOfBirth)).getFormat1()
    setUserDetails({
      ...userDetails,
      firstName,
      lastName,
      yearOfBirth,
      email: emailAddress,
      zipCode,
      city,
      state,
      password,
      cpassword: confirmPassword,
      phoneNumb: phoneNumber
    })
  }, [firstName, lastName, dateOfBirth, emailAddress, zipCode, city, state, phoneNumber, password, confirmPassword])


  function calculateAge (birthDate, today) {
    var years = (today.getFullYear() - birthDate.getFullYear());
    if (today.getMonth() < birthDate.getMonth() || 
    today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
        years--;
    }
    return years;
  }


  const validateInputs = async () => {

    const minAge = 18;
    let valid = true;
    let newValidationErrors = {};

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(emailAddress === undefined || emailAddress === "") {
      newValidationErrors.emailAddress = 'A valid email address is required';
      valid = false;
    }
    else if(!emailRegex.test(emailAddress)) {
      newValidationErrors.emailAddress = 'Please make sure your email address is in proper format (name@domain.com)';
      valid = false;
    }
    if(firstName === undefined || firstName === "") {
      newValidationErrors.fName = 'A valid first name is required';
      valid = false;
    }
    if(lastName === undefined || lastName === "") {
      newValidationErrors.lName = 'A valid last name is required';
      valid = false;
    }
    if(zipCode === undefined || zipCode === "") {
      newValidationErrors.zipCode = 'A valid zip code name is required'
      valid = false;
    }
    else {
      if(zipCode.length !== 5)
      {
        newValidationErrors.zipCode = 'A zip code needs to be 5 digit long'
        valid = false;
      }
    }
    if(dateOfBirth === undefined || dateOfBirth === "") {
      newValidationErrors.dob = 'A valid date of birth is required'
      valid = false;
    }
    else {
      const age = calculateAge(new Date(dateOfBirth),new Date());
      if(age < minAge) {
        newValidationErrors.dob = `You must be atleast ${minAge} years old to register`;
        valid = false;
      }
    }

    const passwordTestRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/;

    if(userDetails.profileType && userDetails.profileType == 'native') {
      if(!passwordTestRegex.test(password)) {
        newValidationErrors.password = 'Your password must have min 8 and max 50 characters with min one number and a special character';
        valid = false;
      }
      if(password !== confirmPassword) {
        newValidationErrors.password = 'Both passwords need to be same';
        newValidationErrors.confirmPassword = 'Both passwords need to be same';
        valid = false;
      } 
      if(password === undefined || password === "") {
        newValidationErrors.password = 'A valid password is required';
        valid = false;
      }
      if(confirmPassword === undefined || confirmPassword === "") {
        newValidationErrors.confirmPassword = 'Please confirm the password';
        valid = false;
      }
    }
    const numReg = /^[0-9]*$/;
    if(phoneNumber !== undefined && (phoneNumber.length < 10 || !numReg.test(phoneNumber))) {
      newValidationErrors.phoneNumber = 'The phone number is not valid';
      valid = false;
    }


    if(!valid) {
      setValidationErrors(newValidationErrors);
      console.log(newValidationErrors);
    } 
    return valid;
  }

  const handleNext = async () => {
    console.log(validateInputs())
    if(await validateInputs())
    {
      try {
        setLoading(true);
        const user = await signUp(userDetails);
        console.log("User storage", user);
        setCurrentUser(user);
        onNext();
      }
      catch (error) {
        console.log('Sign in ##########',error);
        Toaster.fail("Opps! There's a problem.", error.message);
      }
      finally {
        setLoading(false);
      }
    }
  }

  return (
    <div
      id="signup-panel-2"
      className="process-panel-wrap is-active">
      <div className="form-panel">
        <div className="columns is-12">
          <div className="column">
            <div className={`field ${validationErrors.emailAddress && "error-field"}`}>
              <label>Email</label>
              {validationErrors.emailAddress && <label className="error-label">{validationErrors.emailAddress}</label>}
              <div className="control">
                  <input
                  type="email"
                  className="input"
                  placeholder="Enter your email address"
                  onChange={(e) => {setEmailAddress(e.target.value)}}
                  value={emailAddress}
                  name="email"
                  />
              </div>
            </div>
          </div>
          <div className="column">
            <div className={`field ${validationErrors.phoneNumber && "error-field"}`}>
              <label>Phone Number</label>
              {validationErrors.phoneNumber && <label className="error-label">{validationErrors.phoneNumber}</label>}
              <div className="control">
                <input
                  type="number"
                  className="input"
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                  value={phoneNumber}
                />
              </div>
            </div>
          </div>
        </div>

        {
          userDetails.profileType !== 'social' &&
          <div className="columns is-12">
            <div className="column">
              <div className={`field ${validationErrors.password && "error-field"}`}>
                <label>Password</label>
                {validationErrors.password && <label className="error-label">{validationErrors.password}</label>}
                <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="Enter a password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className={`field ${validationErrors.confirmPassword && "error-field"}`}>
                <label>Confirm Password</label>
                {validationErrors.confirmPassword && <label className="error-label">{validationErrors.confirmPassword}</label>}
                <div className="control">
                    <input
                    type="password"
                    className="input"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
              </div>
            </div>
          </div>
        }

        <div className="columns is-12">
          <div className="column">
            <div className={`field ${validationErrors.fName && "error-field"}`}>
              <label>First Name</label>
              {validationErrors.fName && <label className="error-label">{validationErrors.fName}</label>}
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  name="givenName"
                />
              </div>
            </div>
          </div>  
          <div className="column">
            <div className={`field ${validationErrors.lName && "error-field"}`}>
              <label>Last Name</label>
              {validationErrors.lName && <label className="error-label">{validationErrors.lName}</label>}
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your last name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  name="familyName"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`field ${validationErrors.zipCode && "error-field"}`}>
          <label>Zip Code</label>
          {validationErrors.zipCode && <label className="error-label">{validationErrors.zipCode}</label>}
          <div className="control" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <input
              type="number"
              inputMode="numeric"
              className="input"
              placeholder="Enter your Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              name="zipCode"
              max="99999"
              min="00000"
            />
            {zipLoading && <i className="fa fa-spinner fa-spin mr-4" />}
          </div>
        </div>
        <div className="columns" style={{display:'none'}}>
          <div className="column">
            <div className={`field ${validationErrors.zipCode && "error-field"}`}>
              <label>City</label>
              {validationErrors.city && <label className="error-label">{validationErrors.city}</label>}
              <div className="control">
                <input
                  type="text"
                  inputMode="numeric"
                  className="input"
                  placeholder="Enter your City"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  name="city"
                  disabled={cityDisabled}
                />
              </div>
            </div>
          </div>
          <div className="column" style={{display:'none'}}>
            <div className={`field ${validationErrors.zipCode && "error-field"}`}>
              <label>State</label>
              {validationErrors.state && <label className="error-label">{validationErrors.state}</label>}
              <div className="control">
                <input
                  type="text"
                  inputMode="numeric"
                  className="input"
                  placeholder="Enter your State"
                  onChange={(e) => setZipCode(e.target.value)}
                  value={state}
                  name="state"
                  disabled={stateDisabled}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`field ${validationErrors.dob && "error-field"}`}>
          <label>Date of Birth</label>
          {validationErrors.dob && <label className="error-label">{validationErrors.dob}</label>}
          <div className="control">
            <input
              type="date"
              className="input"
              placeholder="Enter your Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
              name="dateOfBirth"
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          className="button process-button"
          data-step={"step-dot-1"}
          onClick={onPrev}>
          Back
        </button>
        <button
          className="button process-button is-next"
          data-step={"step-dot-3"}
          onClick={handleNext}>
          { loading ? <i className="fa fa-spinner fa-spin mr-4" /> : null}
          Next
        </button>
      </div>
    </div>
  )
}

export default UserDetails;