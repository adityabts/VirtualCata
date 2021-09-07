import React, { useState } from 'react'
import { forgotPassword } from '../../services/authentication.services';
import img from "./vclogo.png";

function ForgotPassword() {

    const [ email, setEmail ] =  useState("");
    const [ successMesssage, setMessage ] = useState("");
    const [ loading, setLoading ] =  useState(false);
    const [ error, setError ] = useState();

    const validateEmail = (emailAddress) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let newValidationErrors;
        let valid = true;
        if(emailAddress === undefined || emailAddress === "") {
            newValidationErrors = 'A valid email address is required';
            valid = false;
        }
        else if(!emailRegex.test(emailAddress)) {
            newValidationErrors = 'Please make sure your email address is in proper format (name@domain.com)';
            valid = false;
        }
        if(!valid) {
          setError(newValidationErrors);
          console.log(newValidationErrors);
        } 
        return valid;

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if(validateEmail(email))
        {
            setLoading(true);
            try {
                await forgotPassword(email);
                setMessage("Please check your email. If you are registered with us, you'd receive an email with password reset link.")
                setError(undefined);
            }
            catch(error) {
                setError(error.message);
                console.log("Error", error);
            }
            finally {
                setLoading(false);
            }
        }
    }

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
                                <img src={img} alt="" />
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
                                    src={img}
                                    data-demo-src="assets/img/avatars/jenna.png"
                                    alt=""
                                />
                            </div>
                            {/*Form*/}
                            
                            {
                                !!successMesssage ? 
                                <div className="text-success">
                                    {successMesssage}
                                </div> 
                                :
                                <form className="login-form" onSubmit={onSubmit}>
                                    {successMesssage && <div className="field">
                                        </div>}
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input password-input"
                                                type="email"
                                                placeholder="Enter your email address"
                                                name="password"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        </div>
                                            {error && <div className="field">
                                                <div className="login-error-text">
                                                    Error : {error}
                                                </div>
                                            </div>}
                                        <div className="field">
                                        <div className="column">
                                            <button className="button is-solid primary-button raised is-rounded is-fullwidth" disabled={loading}>
                                            { loading ? <i className="fa fa-spinner fa-spin mr-4" /> : "Submit"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
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

export default ForgotPassword
