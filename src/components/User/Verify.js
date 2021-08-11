import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { verifyEmailwithToken } from '../../services/authentication.services';

const Verify = () => {

    const [loading, setLoading] = useState(false)

    function useQuery() {
    return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const token = query.get("token");

    useEffect(() => {    
        verifyEmailwithToken(token)
            .then(setLoading(false))
            .catch((err) => console.log(err));
    },[])

    console.log(token);

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
                                <div></div>
                                { loading && <i class="fa fa-spinner fa-spin" style={{fontSize:'3rem'}}/>}
                                <div className="login-form">
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                            className="input password-input"
                                            type="password"
                                            placeholder="Enter your email address"
                                            name="password"
                                            // value={credentials.password}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        </div>
                                        <div className="field">
                                        <div className="column">
                                            <button className="button is-solid primary-button raised is-rounded is-fullwidth">
                                                Resend Email
                                            </button>
                                        </div>
                                    </div>
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
