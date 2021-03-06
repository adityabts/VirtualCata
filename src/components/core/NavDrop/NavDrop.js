import React, { useState, useContext, useEffect } from "react";
import DarkModeSwitch from "../DarkModeSwitch";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { FiLifeBuoy, FiPower, FiSettings } from "react-icons/fi";

export default function NavDrop({ isActive, user, ...props }) {
  console.log('NavDropUser$$$$$$$$$$$$$$$$', user);


  let clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE;

  let history = useHistory();
  const onSuccess = () => {
    console.log("Logout made successfully");
    history.push("/login");
  };

  return (
    <div className={`nav-drop is-account-dropdown ${isActive && "is-active"}`}>
      <div className="inner">
        <div className="nav-drop-header">
          <span className="username">
            {user && user.firstName
              ? `${user.firstName} ${user.lastName}`
              : "Name N/A"}
          </span>
          <DarkModeSwitch />
        </div>
        <div className="nav-drop-body account-items">
          <Link id="profile-link" to="/userProfile" className="account-item">
            <div className="media">
              <div className="media-left">
                <div className="image">
                  <img
                    src={
                      user && user.profileImage
                        ? user.profileImage
                        : "https://via.placeholder.com/400x400"
                    }
                    data-demo-src="assets/img/avatars/jenna.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="media-content">
                <h3>
                  {user && user.firstName
                    ? `${user.firstName} ${user.lastName}`
                    : "Name N/A"}
                </h3>
                {user && <small>{user.email}</small>}
              </div>
              <div className="media-right">
                <i data-feather="check" />
              </div>
            </div>
          </Link>
          <hr className="account-divider" />
          <Link to="/userProfile" className="account-item">
            <div className="media">
              <div className="icon-wrap">
                {/* <i data-feather="settings" /> */}
                <FiSettings />
              </div>
              <div className="media-content">
                <h3>Settings</h3>
                <small>Access widget settings.</small>
              </div>
            </div>
          </Link>
          <a className="account-item">
            <div className="media">
              <div className="icon-wrap">
                {/* <i data-feather="life-buoy" /> */}
                <FiLifeBuoy />
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
                {/* <i data-feather="power" /> */}
                <FiPower />
              </div>
              {/* <div className="media-content"> */}
              <GoogleLogout
                style={{background:'transparent', boxShadow: 'unset'}}
                className="media-content"
                clientId={clientId}
                onLogoutSuccess={onSuccess}
                icon={false}>
                <h3>Log out</h3>
                <small>Log out from your account.</small>
              </GoogleLogout>
              {/* </div> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
