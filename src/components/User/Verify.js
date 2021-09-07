import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import img from "./vclogo.png";
import { resetPassword, verifyEmailwithToken } from '../../services/authentication.services';
import Toaster from '../core/Toaster';


const ResetPassword = ({token}) => {

  console.log("Tok", token);

  const history = useHistory();

  const [credentials, setCredentials] = useState({token});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [message, setMessage] = useState("Enter new password");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const validateInput = () => {
    let errored = false;
    if(!!!credentials.password) {
      setError({...error, password:true });
      errored = true;
    }
    if(!!!credentials.cpassword) {
      setError({...error, cpassword:true });
      errored = true;
    }
    return(!errored);
  }

  const handleReset = async () => {
    try {
      setLoading(true);
      await resetPassword(credentials);
      Toaster.success("Awesome !","Password reset successful");
      setMessage("Password reset done! Let's take you to login now.")
      setTimeout(() => {
        history.push('/login')
      }, 3000)
    }
    catch(error) {
      setError({ serverSideError : error.message});
    }
    finally {
      setLoading(false);
    }
  }


  return (
    <>
      {/*Avatar*/}
      <div className="avatar">
        <div className="badge">
          <i data-feather="check" />
        </div>
        <img
          src={img}
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
      </div>
      {/*Form*/}
      <div className="login-form">
        <div className="field">
          {message}
        </div>
        <div className="field">
            <div className="control">
              <input
                className={`input password-input ${error.password ? 'error' : ''}`}
                type="password"
                placeholder="Password"
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
            <div className="control">
              <input
                className={`input password-input ${error.cpassword ? 'error' : ''}`}
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                value={credentials.cpassword}
                onChange={handleChange}
              />
              <div className="input-icon">
                <i data-feather="lock" />
              </div>
            </div>
          </div>
          {error.serverSideError && <div className="field">
            <div className="login-error-text">
              Error : {error.serverSideError}
            </div>
          </div>}
          <div className="field">
            <div className="column">
              <button className="button is-solid primary-button raised is-rounded is-fullwidth" onClick={handleReset} disabled={loading}> 
              { loading ? <i className="fa fa-spinner fa-spin" /> : 'Reset'}
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

const Verify = () => {

    const history = useHistory();

    const [loading, setLoading] = useState(true)
    const [verificationMessage, setMessage] = useState();
    const [resetPassword, setResetPassword] = useState(false);

    const successMessage = <><h1>Thanks for verifying you email address!</h1><h1>Redirecting you to home.</h1></>
    const failureMessage = <><h1>Token expired!</h1><h1>Please request the verification again from user profile.</h1></>

    function useQuery() {
    return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const token = query.get("token");

    useEffect(() => {    
      verifyEmailwithToken(token)
        .then((data) => {
          console.log("Data", data);
          if(data === "reset_password") {
            setResetPassword(true);
          }
          else {
            setTimeout(() => {
              setMessage(successMessage);
              history.push('../home')
            }, 3000)
          }
        })
        .catch((err) => setMessage(failureMessage))
        .finally(() => {
          setLoading(false);
        })
    },[])

    useEffect(() => {
      console.log('Loading',loading)
    },[loading])

    console.log(token);

    return (
            <div>
                <div className="login-wrapper">
                    <div className="login-wrapper columns is-gapless">
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
                    <div className="column is-6">
                      <div className="hero form-hero is-fullheight">
                        <div className="logo-wrap">
                          <div className="wrap-inner">
                            <img src={img} alt="" />
                          </div>
                        </div>
                        <div className="hero-body">
                          <div className="form-wrapper text-center">
                            { 
                              loading ? 
                                <i className="fa fa-spinner fa-spin" style={{fontSize:'3rem'}}/>
                              :
                                <>{
                                  resetPassword ? <ResetPassword token={token}/> : <>{verificationMessage}</>
                                }</>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        )
}

export default Verify;