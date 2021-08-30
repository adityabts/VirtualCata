import React, {useState, useEffect, useContext} from 'react'
import authContext from "../../../Context/authContext";


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
  const [firstName, setFirstName] = useState(userDetails.firstName || undefined);
  const [lastName, setLastName] = useState(userDetails.lastName || undefined);
  const [zipCode, setZipCode] = useState(userDetails.zipCode || undefined);
  const [dateOfBirth, setDateOfBirth] = useState(new FormatDate(new Date(userDetails.yearOfBirth)).getFormat2());


  useEffect(() => {
    setAllData({ ...allData, userDetails });
  }, [userDetails])

  useEffect(() => {
    const yearOfBirth = new FormatDate(new Date(dateOfBirth)).getFormat1()
    setUserDetails({
      ...userDetails,
      firstName,
      lastName,
      yearOfBirth,
      email: emailAddress,
      zipCode,
    })
  }, [firstName,lastName,dateOfBirth,emailAddress,zipCode])


  function calculateAge (birthDate, today) {
    var years = (today.getFullYear() - birthDate.getFullYear());
    if (today.getMonth() < birthDate.getMonth() || 
    today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
        years--;
    }
    return years;
  }


  const validateInputs = () => {

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
      if(zipCode.length !== 5 && zipCode.length !== 9)
      {
        newValidationErrors.zipCode = 'A zip code needs to be 5 or 9 digit long'
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
    if(!valid) {
      setValidationErrors(newValidationErrors);
      console.log(newValidationErrors);
    } 
    return valid;
  }

  const handleNext = () => {
    if(validateInputs())
    {
      onNext();
    }
  }

  return (
    <div
      id="signup-panel-2"
      className="process-panel-wrap is-active">
      <div className="form-panel">
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
        <div className={`field ${validationErrors.zipCode && "error-field"}`}>
          <label>Zip Code</label>
          {validationErrors.zipCode && <label className="error-label">{validationErrors.zipCode}</label>}
          <div className="control">
            <input
              type="text"
              inputMode="numeric"
              className="input"
              placeholder="Enter your Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              name="zipCode"
            />
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
          Next
        </button>
      </div>
    </div>
  )
}

export default UserDetails;