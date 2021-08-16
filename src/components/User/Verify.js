import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { verifyEmailwithToken } from '../../services/authentication.services';

const Verify = () => {

    const history = useHistory();

    const [loading, setLoading] = useState(true)
    const [verificationMessage, setMessage] = useState();

    const successMessage = <><h1>Thanks for verifying you email address!</h1><h1>Redirecting you to home.</h1></>
    const failureMessage = <><h1>Token expired!</h1><h1>Please request the verification again from user profile.</h1></>

    function useQuery() {
    return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const token = query.get("token");

    useEffect(() => {    
      verifyEmailwithToken(token)
        .then(() => {
          setMessage(successMessage);
          setTimeout(() => {
            history.push('../home')
          }, 3000)
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
                            <img src="assets/img/logo/vc-logo.png" alt="" />
                          </div>
                        </div>
                        <div className="hero-body">
                          <div className="form-wrapper text-center">
                            { 
                              loading ? 
                                <i class="fa fa-spinner fa-spin" style={{fontSize:'3rem'}}/>
                              :
                                <div>
                                  {verificationMessage}
                                </div>
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