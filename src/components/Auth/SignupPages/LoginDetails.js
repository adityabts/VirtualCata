import React, {useState, useEffect, useContext } from 'react'
import authContext from "../../../Context/authContext";
import ReactCrop from 'react-image-crop';

function LoginDetails({isActive, value, onNext, onPrev}) {

  const [validationErrors, setValidationErrors] = useState({});
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { allData, setAllData } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(allData.userDetails);

  useEffect(() => {
    console.log("User Details on login details page",userDetails);
  }, [])

  const validateInputs = () => {
    let valid = true;
    let newValidationErrors = {};
    const passwordTestRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/;

    if(userDetails.loginType && userDetails.loginType !== 'SOCIAL_LOGIN_GOOGLE') {
      if(!passwordTestRegex.test(password) && userDetails.loginType !== 'NATIVE_LOGIN') {
        newValidationErrors.password = 'Your password must have min 8 and max 50 characters with atleast one number and atleast one special character';
        valid = false;
      }
      if(password !== confirmPassword) {
        console.log(password,confirmPassword);
        newValidationErrors.password = 'Both passwords need to be same';
        newValidationErrors.confirmPassword = 'Both passwords need to be same';
        valid = false;
      } 
      if(password === undefined || password === "" && userDetails.loginType !== 'NATIVE_LOGIN') {
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
      console.log(phoneNumber.length,(phoneNumber !== undefined && phoneNumber.length < 10))
      newValidationErrors.phoneNumber = 'The phone number is not valid';
      valid = false;
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
      console.log("Phone");
      console.log(phoneNumber);
      onNext();
    }
  }
  
  
  return (
    <div className="process-panel-wrap is-active">
      <div className="form-panel">
        <div className={`field ${validationErrors.phoneNumber && "error-field"}`}>
          <label>Phone Number</label>
          {validationErrors.phoneNumber && <label className="error-label">{validationErrors.phoneNumber}</label>}
          <div className="control">
            <input
              type="tel"
              className="input"
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        {
          userDetails.loginType !== 'SOCIAL_LOGIN_GOOGLE' &&
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
        }
        {
          userDetails.loginType !== 'SOCIAL_LOGIN_GOOGLE' &&
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
        }
      </div>
      <div className="buttons">
        <button
        className="button process-button"
        data-step={"step-dot-3"}
        onClick={onPrev}>
          Back
        </button>
        <button
        className="button process-button is-next"
        data-step={"step-dot-5"}
        onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default LoginDetails
