import React from 'react'

export default function NavDrop({ isActive }) {
    return (
        <div className={`nav-drop is-account-dropdown ${isActive && "is-active"}`}>
            <div className="inner">
                <div className="nav-drop-header">
                    <span className="username">Jenna Davis</span>
                    <label className="theme-toggle">
                        <input type="checkbox" />
                        <span className="toggler">
                            <span className="dark">
                                <i data-feather="moon" />
                            </span>
                            <span className="light">
                                <i data-feather="sun" />
                            </span>
                        </span>
                    </label>
                </div>
                <div className="nav-drop-body account-items">
                    <a
                        id="profile-link"
                        href="/profile-main.html"
                        className="account-item">
                        <div className="media">
                            <div className="media-left">
                                <div className="image">
                                    <img
                                        src="https://via.placeholder.com/400x400"
                                        data-demo-src="assets/img/avatars/jenna.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="media-content">
                                <h3>Jenna Davis</h3>
                                <small>Main account</small>
                            </div>
                            <div className="media-right">
                                <i data-feather="check" />
                            </div>
                        </div>
                    </a>
                    <hr className="account-divider" />
                    <a href="/options-settings.html" className="account-item">
                        <div className="media">
                            <div className="icon-wrap">
                                <i data-feather="settings" />
                            </div>
                            <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                            </div>
                        </div>
                    </a>
                    <a className="account-item">
                        <div className="media">
                            <div className="icon-wrap">
                                <i data-feather="life-buoy" />
                            </div>
                            <div className="media-content">
                                <h3>Help</h3>
                                <small>Contact our support.</small>
                            </div>
                        </div>
                    </a>
                    <a className="account-item">
                        <div className="media">
                            <div className="icon-wrap">
                                <i data-feather="power" />
                            </div>
                            <div className="media-content">
                                <h3>Log out</h3>
                                <small>Log out from your account.</small>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
