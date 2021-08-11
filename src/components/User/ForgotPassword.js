import React from 'react'

function ForgotPassword() {
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
                                            Recover Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="section forgot-password">
                                {/* <div className="has-text-centered">
                                <a href="#">Forgot passwords ? </a>
                                <Link to="/signup"> Sign Up ?</Link>
                                </div> */}
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
