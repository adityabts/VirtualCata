import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiFlag, FiSmile, FiUser, FiImage, FiLock, FiPlus } from "react-icons/fi";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../utils/refreshToken";
import logo from './vclogo.png';
import authContext from "../../Context/authContext";

const interestsList = [
  {
    id:1,
    thumbnail: 'https://img-premium.flaticon.com/png/512/3143/premium/3143902.png?token=exp=1625756612~hmac=db5f13a484b9f56b1bca79d246903872',
    title: 'Food & Beverages',
  },
  {
    id:2,
    thumbnail: 'https://image.flaticon.com/icons/png/512/2928/2928158.png',
    title: 'Health & Fitness',
  },{
    id:3,
    thumbnail: 'https://img-premium.flaticon.com/png/512/3143/premium/3143902.png?token=exp=1625756612~hmac=db5f13a484b9f56b1bca79d246903872',
    title: 'Food & Beverages',
  },
  {
    id:4,
    thumbnail: 'https://image.flaticon.com/icons/png/512/2928/2928158.png',
    title: 'Health & Fitness',
  },{
    id:5,
    thumbnail: 'https://img-premium.flaticon.com/png/512/3143/premium/3143902.png?token=exp=1625756612~hmac=db5f13a484b9f56b1bca79d246903872',
    title: 'Food & Beverages',
  },
  {
    id:6,
    thumbnail: 'https://image.flaticon.com/icons/png/512/2928/2928158.png',
    title: 'Health & Fitness',
  },
];

function Signup() {
  let clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE;

  let { allData, setAllData } = useContext(authContext);

  const [userDetails, setUserDetails] = useState(allData.userDetails);
  const [userInterests, setUseInterests] = useState([]);

  const [stepValue, setStepValue] = useState(1);

  const handleSelect = (interest) => {
    let newValue = [...userInterests];
    if(userInterests.includes(interest))
    {
      newValue =  userInterests.filter((items) => items.id !== interest.id);
    }
    else {
      newValue.push(interest);
    }
    setUseInterests(newValue);
    console.log(newValue);
  }

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

  const validateInputs = () => {
    const emailTest = new RegExp("e");
    const nameTest = new RegExp("e");
    const phoneNumberTest = new RegExp("e");
    const passwordTest = new RegExp("e");

  }

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
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
                // className="dot is-first is-current"
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
                // className="dot is-third"
                data-step={50}>
                <FiImage />
              </div>
              <div
                id="step-dot-4"
                className={`dot is-fourth ${
                  stepValue === 4 ? "is-active" : ""
                } ${stepValue > 4 ? "is-current" : ""}`}
                // className="dot is-fourth"
                data-step={75}>
                <FiLock />
              </div>
              <div
                id="step-dot-5"
                className={`dot is-fifth ${
                  stepValue === 5 ? "is-active" : ""
                } ${stepValue > 5 ? "is-current" : ""}`}
                // className="dot is-fifth"
                data-step={100}>
                <FiFlag />
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
              <h2
                id="step-title-5"
                className={`step-title ${stepValue === 5 ? "is-active" : ""}`}>
                You're all set. Ready?
              </h2>
            </div>
            <div
              id="signup-panel-1"
              className={`process-panel-wrap ${
                stepValue === 1 ? "is-active" : "is-narrow"
              }`}>
              <div
                className="columns mt-4"
                style={{ justifyContent: "center" }}>
                <div className="column is-4">
                  <div className="account-type">
                    <div className="type-image">
                      <img
                        className="type-illustration"
                        src="assets/img/illustrations/signup/type-2.svg"
                        alt=""
                      />
                      <img
                        className="type-bg light-image"
                        src="assets/img/illustrations/signup/type-2-bg.svg"
                        alt=""
                      />
                      <img
                        className="type-bg dark-image"
                        src="assets/img/illustrations/signup/type-2-bg-dark.svg"
                        alt=""
                      />
                    </div>
                    <h3>Welcome to Virtual Cata</h3>
                    <p>
                      Create an account to be able to do some awesome
                      things.
                    </p>
                    <button
                      className="button is-fullwidth process-button"
                      data-step={"step-dot-2"}
                      onClick={nextStep}>
                      Signup with Email
                    </button>
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Sign Up"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                      style={{ marginTop: "100px" }}
                      isSignedIn={true}
                      scope={"https://www.googleapis.com/auth/user.gender.read"}
                      className="button is-fullwidth process-button"
                      data-step={"step-dot-2"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              id="signup-panel-2"
              className={`process-panel-wrap ${
                stepValue === 2 ? "is-active" : "is-narrow"
              }`}>
              <div className="form-panel">
                <div className="field">
                  <label>First Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter your first name"
                      onChange={handleChange}
                      value={userDetails.givenName}
                      name="givenName"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter your last name"
                      onChange={handleChange}
                      value={userDetails.familyName}
                      name="familyName"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Zip Code</label>
                  <div className="control">
                    <input
                      type="number"
                      className="input"
                      placeholder="Enter your Zip Code"
                      onChange={handleChange}
                      value={userDetails.zipCode}
                      name="zipCode"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Date of Birth</label>
                  <div className="control">
                    <input
                      type="date"
                      className="input"
                      placeholder="Enter your Date of Birth"
                      onChange={handleChange}
                      value={userDetails.dateOfBirth}
                      name="dateOfBirth"
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="button process-button"
                  data-step={"step-dot-1"}
                  onClick={prevStep}>
                  Back
                </button>
                <button
                  className="button process-button is-next"
                  data-step={"step-dot-3"}
                  onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>
            <div
              id="signup-panel-3"
              className={`process-panel-wrap ${
                stepValue === 3 ? "is-active" : "is-narrow"
              }`}>
              <div className="form-panel">
                <div className="photo-upload">
                  <div className="preview">
                    <button className="upload-button">
                      <FiPlus />
                    </button>
                    <img
                      id="upload-preview"
                      src={
                        userDetails.imageUrl
                          ? userDetails.imageUrl
                          : "https://via.placeholder.com/150x150"
                      }
                      data-demo-src="assets/img/avatars/avatar-w.png"
                      alt=""
                    />
                    <form
                      id="profile-pic-dz"
                      className="dropzone is-hidden"
                      action="/"
                    />
                  </div>
                  <div className="limitation">
                    <small>
                      Only images with a size lower than 3MB are allowed.
                    </small>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="button process-button"
                  data-step={"step-dot-2"}
                  onClick={prevStep}>
                  Back
                </button>
                <button
                  className="button process-button is-next"
                  data-step={"step-dot-4"}
                  onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>
            <div
              id="signup-panel-4"
              className={`process-panel-wrap ${
                stepValue === 4 ? "is-active" : "is-narrow"
              }`}>
              <div className="form-panel">
                <div className="field">
                  <label>Email</label>
                  <div className="control">
                    <input
                      type="email"
                      className="input"
                      placeholder="Enter your email address"
                      onChange={handleChange}
                      value={userDetails.email}
                      name="email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <div className="control">
                    <input
                      type="tel"
                      className="input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="Choose a password"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Repeat Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="Repeat your password"
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="button process-button"
                  data-step={"step-dot-3"}
                  onClick={prevStep}>
                  Back
                </button>
                <button
                  className="button process-button is-next"
                  data-step={"step-dot-5"}
                  onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>
            <div
              id="signup-panel-5"
              className={`process-panel-wrap ${
                stepValue === 5 ? "is-active" : "is-narrow"
              }`}>
              <div className="form-panel">
                <img
                  className="success-image"
                  src="assets/img/illustrations/signup/mailbox.svg"
                  alt=""
                />
                <div className="success-text">
                  <h3>We are almost done. Select a few of your Interests</h3>
                  </div>
                  <div>
                  <div className="columns is-multiline flex-portrait mt-5">
                    {
                      interestsList.map(
                        item => <div className="column is-4">
                        <div
                          className="" 
                          className={`card signup-interests-card ${ userInterests. includes(item) ? "is-selected" : ""}`} 
                          onClick={() => handleSelect(item)}
                        >
                          <img src={item.thumbnail} style={{maxHeight: '40px'}}/>
                          <p>{item.title}</p>
                        </div>
                        </div>)
                    }
                    <div>

                    </div>
                  </div>
                  <Link
                    id="signup-finish"
                    className="button is-fullwidth"
                    to="/home">
                    Let Me In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Edit Credit card Modal*/}
        <div id="crop-modal" className="modal is-small crop-modal is-animated">
          <div className="modal-background" />
          <div className="modal-content">
            <div className="modal-card">
              <header className="modal-card-head">
                <h3>Crop your picture</h3>
                <div className="close-wrap">
                  <button className="close-modal" aria-label="close">
                    <i data-feather="x" />
                  </button>
                </div>
              </header>
              <div className="modal-card-body">
                <div id="cropper-wrapper" className="cropper-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
