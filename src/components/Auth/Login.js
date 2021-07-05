import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  let initialState = { username: "", password: "" };
  const [credentials, setCredentials] = useState(initialState);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login-wrapper">
        {/* Main Wrapper */}
        <div className="login-wrapper columns is-gapless">
          {/*Left Side (Desktop Only)*/}
          <div className="column is-6 is-hidden-mobile hero-banner">
            <div className="hero is-fullheight is-login">
              <div className="hero-body">
                <div className="container">
                  <div className="left-caption">
                    <h2>Join an Exciting Virtual Experience.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Right Side*/}
          <div className="column is-6">
            <div className="hero form-hero is-fullheight">
              {/*Logo*/}
              <div className="logo-wrap">
                <div className="wrap-inner">
                  <img src="assets/img/logo/vc-logo.png" alt="" />
                </div>
              </div>
              {/*Login Form*/}
              <div className="hero-body">
                <div className="form-wrapper">
                  {/*Avatar*/}
                  <div className="avatar">
                    <div className="badge">
                      <i data-feather="check" />
                    </div>
                    <img
                      src="assets/img/logo/vc-logo.png"
                      data-demo-src="assets/img/avatars/jenna.png"
                      alt=""
                    />
                  </div>
                  {/*Form*/}
                  <div className="login-form">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input email-input"
                          type="email"
                          placeholder="johndoe@domain.com"
                          name="username"
                          value={credentials.username}
                          onChange={handleChange}
                        />
                        <div className="input-icon">
                          <i data-feather="user" />
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input password-input"
                          type="password"
                          placeholder="●●●●●●●"
                          name="password"
                          value={credentials.password}
                          onChange={handleChange}
                        />
                        <div className="input-icon">
                          <i data-feather="lock" />
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="column">
                        <Link to="../home">
                          <button className="button is-solid primary-button raised is-rounded is-fullwidth">
                            Login
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control row">
                        <a className="mr-5 login-button share__buttons__item share__buttons__item--facebook">
                          <svg
                            aria-hidden="true"
                            width={12}
                            height={12}
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 264 512">
                            <path
                              fill="currentColor"
                              d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"
                            />
                          </svg>
                          Login with Facebook
                        </a>
                        <a className="login-button share__buttons__item share__buttons__item--google">
                          <svg
                            aria-hidden="true"
                            width={12}
                            height={12}
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512">
                            <path
                              fill="currentColor"
                              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                            />
                          </svg>
                          Login with Google
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="section forgot-password">
                    <div className="has-text-centered">
                      <a href="#">Forgot passwords ? </a>
                      <Link to="/signup"> Sign Up ?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
