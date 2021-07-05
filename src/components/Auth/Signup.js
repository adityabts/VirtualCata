import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiFlag, FiSmile, FiUser, FiImage, FiLock } from "react-icons/fi";

function Signup() {

  const [stepValue, setStepValue] = useState(1);

  const nextStep = () => {
    setStepValue(stepValue + 1);
  }

  const prevStep = () => {
    setStepValue(stepValue - 1);
  }

  return (
    <div>
      {/* <div className="pageloader" /> */}
      <div className="signup-wrapper">
        <div className="fake-nav">
          <Link to="/" className="logo">
            <img
              src="assets/img/logo/friendkit-bold.svg"
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
                className={`dot is-first ${stepValue === 1 ? "is-active" : ""} ${stepValue > 1 ? "is-current" : ""}`}
                // className="dot is-first is-current"
                data-step={0}>
                <FiSmile />
              </div>
              <div
                id="step-dot-2"
                className={`dot is-second ${stepValue === 2 ? "is-active" : ""} ${stepValue > 2 ? "is-current" : ""}`}
                data-step={25}
              >
                <FiUser />
              </div>
              <div
                id="step-dot-3"
                className={`dot is-third ${stepValue === 3 ? "is-active" : ""} ${stepValue > 3 ? "is-current" : ""}`}
                // className="dot is-third"
                data-step={50}>
                <FiImage />
              </div>
              <div
                id="step-dot-4"
                className={`dot is-fourth ${stepValue === 4 ? "is-active" : ""} ${stepValue > 4 ? "is-current" : ""}`}
                // className="dot is-fourth"
                data-step={75}
              >
                <FiLock />
              </div>
              <div
                id="step-dot-5"
                className={`dot is-fifth ${stepValue === 5 ? "is-active" : ""} ${stepValue > 5 ? "is-current" : ""}`}
                // className="dot is-fifth"
                data-step={100}
              >
                <FiFlag />
              </div>
            </div>
          </div>
        </div>
        <div className="outer-panel">   
          <div className="outer-panel-inner">
            <div className="process-title">
              <h2 id="step-title-1" className={`step-title ${stepValue === 1 ? "is-active" : ""}`}>
                Welcome, select an account type.
              </h2>
              <h2 id="step-title-2" className={`step-title ${stepValue === 2 ? "is-active" : ""}`}>
                Tell us more about you.
              </h2>
              <h2 id="step-title-3" className={`step-title ${stepValue === 3 ? "is-active" : ""}`}>
                Upload a profile picture.
              </h2>
              <h2 id="step-title-4" className={`step-title ${stepValue === 4 ? "is-active" : ""}`}>
                Secure your account.
              </h2>
              <h2 id="step-title-5" className={`step-title ${stepValue === 5 ? "is-active" : ""}`}>
                You're all set. Ready?
              </h2>
            </div>
            <div id="signup-panel-1" className={`process-panel-wrap ${stepValue === 1 ? "is-active" : "is-narrow"}`}>
              <div className="columns mt-4" style={{justifyContent:'center'}}>
                {/* <div className="column is-4">
                  <div className="account-type">
                    <div className="type-image">
                      <img
                        className="type-illustration"
                        src="assets/img/illustrations/signup/type-1.svg"
                        alt=""
                      />
                      <img
                        className="type-bg light-image"
                        src="assets/img/illustrations/signup/type-1-bg.svg"
                        alt=""
                      />
                      <img
                        className="type-bg dark-image"
                        src="assets/img/illustrations/signup/type-1-bg-dark.svg"
                        alt=""
                      />
                    </div>
                    <h3>Company</h3>
                    <p>
                      Create a company account to be able to do some awesome
                      things.
                    </p>
                    <a
                      className="button is-fullwidth process-button"
                      data-step={"step-dot-2"}>
                      Continue
                    </a>
                  </div>
                </div> */}
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
                    <h3>Public Person</h3>
                    <p>
                      Create a public account to be able to do some awesome
                      things.
                    </p>
                    <a
                      className="button is-fullwidth process-button"
                      data-step={"step-dot-2"}
                      onClick={nextStep}
                    >
                      Continue
                    </a>
                  </div>
                </div>
                {/* <div className="column is-4">
                  <div className="account-type">
                    <div className="type-image">
                      <img
                        className="type-illustration"
                        src="assets/img/illustrations/signup/type-3.svg"
                        alt=""
                      />
                      <img
                        className="type-bg light-image"
                        src="assets/img/illustrations/signup/type-3-bg.svg"
                        alt=""
                      />
                      <img
                        className="type-bg dark-image"
                        src="assets/img/illustrations/signup/type-3-bg-dark.svg"
                        alt=""
                      />
                    </div>
                    <h3>Personal</h3>
                    <p>
                      Create a personal account to be able to do some awesome
                      things.
                    </p>
                    <Link
                      to="/"
                      className="button is-fullwidth process-button"
                      data-step="step-dot-2">
                      Continue
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div id="signup-panel-2" className={`process-panel-wrap ${stepValue === 2 ? "is-active" : "is-narrow"}`}>
              <div className="form-panel">
                <div className="field">
                  <label>First Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter your first name"
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
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <a className="button process-button" data-step={"step-dot-1"} onClick={prevStep}>
                  Back
                </a>
                <a
                  className="button process-button is-next"
                  data-step={"step-dot-3"}
                  onClick={nextStep}>
                  Next
                </a>
              </div>
            </div>
            <div id="signup-panel-3" className={`process-panel-wrap ${stepValue === 3 ? "is-active" : "is-narrow"}`}>
              <div className="form-panel">
                <div className="photo-upload">
                  <div className="preview">
                    <a className="upload-button">
                      <i data-feather="plus" />
                    </a>
                    <img
                      id="upload-preview"
                      src="https://via.placeholder.com/150x150"
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
                <a className="button process-button" data-step={"step-dot-2"} onClick={prevStep}>
                  Back
                </a>
                <a
                  className="button process-button is-next"
                  data-step={"step-dot-4"}
                  onClick={nextStep}>
                  Next
                </a>
              </div>
            </div>
            <div id="signup-panel-4" className={`process-panel-wrap ${stepValue === 4 ? "is-active" : "is-narrow"}`}>
              <div className="form-panel">
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
                <div className="field">
                  <label>Phone Number</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <a className="button process-button" data-step={"step-dot-3"} onClick={prevStep}>
                  Back
                </a>
                <a
                  className="button process-button is-next"
                  data-step={"step-dot-5"}
                  onClick={nextStep}
                >
                  Next
                </a>
              </div>
            </div>
            <div id="signup-panel-5" className={`process-panel-wrap ${stepValue === 5 ? "is-active" : "is-narrow"}`}>
              <div className="form-panel">
                <img
                  className="success-image"
                  src="assets/img/illustrations/signup/mailbox.svg"
                  alt=""
                />
                <div className="success-text">
                  <h3>Congratz, you successfully created your account.</h3>
                  <p>
                    {" "}
                    We just sent you a confirmation email. PLease confirm your
                    account within 24 hours.
                  </p>
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
