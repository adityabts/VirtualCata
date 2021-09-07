import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiFlag, FiSmile, FiUser, FiImage, FiLock, FiPlus } from "react-icons/fi";
import { refreshTokenSetup } from "../../utils/refreshToken";
import logo from './vclogo.png';
import authContext from "../../Context/authContext";
import ProfilePicture from "./SignupPages/ProfilePicture";

import LoginDetails from "./SignupPages/LoginDetails";
import InterestsSelection from "./SignupPages/InterestsSelection";
import UserDetails from "./SignupPages/UserDetails";
import WelcomePage from "./SignupPages/WelcomePage";

function Signup() {
  const clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE;

  const { allData, setAllData } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(allData.userDetails);

  const [stepValue, setStepValue] = useState(1);

  const nextStep = () => {
    setStepValue(stepValue + 1);
  };

  const prevStep = () => {
    setStepValue(stepValue - 1);
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  // Google Auth Callbacks
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    setUserDetails(res.profileObj);
    setAllData({ ...allData, userDetails: res.profileObj });
    nextStep();
    refreshTokenSetup(res);
  };

  return (
    <div>
      {/* <div className="pageloader" /> */}
      <div className="signup-wrapper">
        <div className="fake-nav">
          <Link to="/" className="logo">
            <img
              src={logo}
              alt=""
              width={112}
              height={28}
            />
          </Link>
        </div>
        <div className="process-bar-wrap">
          <div className="process-bar">
            <div className="progress-wrap">
              <div className="track" />
              <div className="bar" />
              <div
                id="step-dot-1"
                className={`dot is-first ${
                  stepValue === 1 ? "is-active" : ""
                } ${stepValue > 1 ? "is-current" : ""}`}
                data-step={0}>
                <FiSmile />
              </div>
              <div
                id="step-dot-2"
                className={`dot is-second ${
                  stepValue === 2 ? "is-active" : ""
                } ${stepValue > 2 ? "is-current" : ""}`}
                data-step={25}>
                <FiUser />
              </div>
              <div
                id="step-dot-3"
                className={`dot is-third ${
                  stepValue === 3 ? "is-active" : ""
                } ${stepValue > 3 ? "is-current" : ""}`}
                data-step={50}>
                <FiImage />
              </div>
              <div
                id="step-dot-4"
                className={`dot is-fourth ${
                  stepValue === 4 ? "is-active" : ""
                } ${stepValue > 4 ? "is-current" : ""}`}
                data-step={75}>
                <FiLock />
              </div>
            </div>
          </div>
        </div>
        <div className="outer-panel">
          <div className="outer-panel-inner">
              <div className="process-title">
                <h2
                  id="step-title-1"
                  className={`step-title ${stepValue === 1 ? "is-active" : ""}`}>
                  Welcome, select an account type.
                </h2>
                <h2
                  id="step-title-2"
                  className={`step-title ${stepValue === 2 ? "is-active" : ""}`}>
                  Tell us more about you.
                </h2>
                <h2
                  id="step-title-3"
                  className={`step-title ${stepValue === 3 ? "is-active" : ""}`}>
                  Upload a profile picture.
                </h2>
                <h2
                  id="step-title-4"
                  className={`step-title ${stepValue === 4 ? "is-active" : ""}`}>
                  Secure your account.
                </h2>
              </div>
              {stepValue === 1 && <WelcomePage onNext={nextStep}/>}
              {stepValue === 2 && <UserDetails onNext={nextStep} onPrev={prevStep}/>}
              {stepValue === 3 && <ProfilePicture onNext={nextStep} onPrev={prevStep} />}   
              {stepValue === 4 && <InterestsSelection onNext={nextStep} onPrev={prevStep}/>}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
