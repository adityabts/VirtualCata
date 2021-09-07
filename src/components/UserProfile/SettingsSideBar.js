import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/user';

function SideBar({match, location}) {

  const [ user, setUser ] = useState({});

	useEffect(() => {
	  const currentUser = getCurrentUser();
	  setUser(currentUser);
	}, [])

  return (
    <div className="settings-sidebar is-active">
      <div className="settings-sidebar-inner">
        <div className="user-block">
          <a className="close-settings-sidebar is-hidden">
            <i data-feather="x" />
          </a>
          <div className="avatar-wrap">
            <img
              src={user.profileImage}
              data-demo-src="assets/img/avatars/jenna.png"
              data-user-popover={0}
              alt=""
            />
            <div className="badge">
              <i data-feather="check" />
            </div>
          </div>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <p>{user.email}</p>
        </div>
        <div className="user-menu">
          <div className="user-menu-inner has-slimscroll">
            <div className="menu-block">
              <ul>
                <li data-section="general" className={ (location.pathname === `${match.url}/general`) ? "is-active" : undefined} >
                  <Link to={`${match.url}/general`}>
                    <i data-feather="settings" />
                    <span>General</span>
                  </Link>
                </li>
                <li data-section="security" className={ (location.pathname === `${match.url}/security`) ? "is-active" : undefined} >
                  <Link to={`${match.url}/security`}>
                    <i data-feather="shield" />
                    <span>Security</span>
                  </Link>
                </li>
                <li data-section="personal" className={ (location.pathname === `${match.url}/account`) ? "is-active" : undefined} >
                  <Link to={`${match.url}/account`}>
                    <i data-feather="alert-triangle" />
                    <span>Account</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="separator" />
            <div className="menu-block">
              <ul>
                <li data-section="privacy" className={ (location.pathname === `${match.url}/privacy`) ? "is-active" : undefined} >
                  <Link to={`${match.url}/privacy`}>
                    <i data-feather="lock" />
                    <span>Privacy</span>
                  </Link>
                </li>
                <li data-section="preferences" className={ (location.pathname === `${match.url}/preferences`) ? "is-active" : undefined} >
                  <Link to={`${match.url}/preferences`}>
                    <i data-feather="sliders" />
                    <span>Interests</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="separator" />
            <div className="menu-block">
              <ul>
                <li data-section="notifications" className={ (location.pathname === `${match.url}/notifications`) ? "is-active" : undefined} >
                 <Link to={`${match.url}/notifications`}>
                    <i data-feather="bell" />
                    <span>Notifications</span>
                  </Link>
                </li>
                <li data-section="support" className={ (location.pathname === `${match.url}/help`) ? "is-active" : undefined} >
                  <Link to={`${match.url}/help`}>
                    <i data-feather="life-buoy" />
                    <span>Help</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
