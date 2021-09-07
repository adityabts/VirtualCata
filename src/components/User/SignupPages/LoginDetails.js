import React, {useState, useEffect, useContext } from 'react'
import authContext from "../../../Context/authContext";
import { useHistory } from 'react-router';
import Toast, { ToastStates } from '../../core/Toast';
import { signIn  } from "../../../services/authentication.services";
import { setCurrentUser } from "../../../utils/user";

import { signUp } from '../../../services/authentication.services';

function LoginDetails({isActive, value, onNext, onPrev}) {

  const history = useHistory(); 

  const { allData, setAllData } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(allData.userDetails);

  const [validationErrors, setValidationErrors] = useState({});
  const [phoneNumber, setPhoneNumber] = useState(userDetails.phoneNumb || undefined);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  
  const [ showToast, setShowToast ] = useState(false);
  const [ toastAttr, setToastAttr ] = useState({});

  const onToastHide = () => {
    setShowToast(false);
  }

  useEffect(() => {
    setAllData({ ...allData, userDetails });
  }, [userDetails])

  useEffect(() => {
    console.log("All Data", allData.userDetails);
  }, [allData])

  useEffect(() => {
    console.log('Password', password);
    console.log('ConfirmPassword', confirmPassword);
    console.log(validationErrors);
  })

  useEffect(() => {
    setUserDetails({
      ...userDetails,
      password,
      cpassword: confirmPassword,
      phoneNumb: phoneNumber
    })
    console.log({
      ...userDetails,
      password,
      cpassword: confirmPassword,
      phoneNumb: phoneNumber
    });
  }, [phoneNumber, password, confirmPassword])

  const validateInputs = () => {
    let valid = true;
    let newValidationErrors = {};
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
    } else {
      setValidationErrors({})
    }
    return valid;
  }

  const handleNext = async () => {
    console.log(validateInputs())
    if(validateInputs())
    {
      try {
        setLoading(true);
        await signUp(userDetails);
        // const user = await signIn({...credentials, loginType:'native' });
        // setCurrentUser(user);
        setToastAttr({...toastAttr, title:`Awesome, ${userDetails.firstName}!`, message: 'Signed up sucessfully', state: ToastStates.SUCCESS});
        setShowToast(true);
        onNext();
      }
      catch (error) {
        console.log('Sign in ',error.message);
        setToastAttr({...toastAttr, title:`Oops! Sorry ${userDetails.firstName}`, message: error.message, state: ToastStates.FAIL});
        setShowToast(true);
      }
      finally {
        setLoading(false);
      }
    }
  }
  
  
  return (
    <div className="process-panel-wrap is-active">
      <Toast toastState={toastAttr.state} title={toastAttr.title} message={toastAttr.message} show={showToast} onClose={onToastHide}/>
      <div className="form-panel">
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
        {
          userDetails.profileType !== 'social' &&
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
          userDetails.profileType !== 'social' &&
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
          { loading ? <i className="fa fa-spinner fa-spin" /> : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default LoginDetails