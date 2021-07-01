import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../core/NavBar/NavBar";
import General from './General';
import Security from './Security';
import Personal from './Personal';
import Privacy from "./Privacy";
import Interests from "./Interests";
import Notifications from "./Notifications";
import Help from "./Help";


function UserProfile() {
  return (
    <div>
      <NavBar />
      <div className="view-wrapper is-full">
        {/* /partials/settings/settings-sidebar.html */}
        <div className="settings-sidebar is-active">
          <div className="settings-sidebar-inner">
            <div className="user-block">
              <a className="close-settings-sidebar is-hidden">
                <i data-feather="x" />
              </a>
              <div className="avatar-wrap">
                <img
                  src="https://via.placeholder.com/150x150"
                  data-demo-src="assets/img/avatars/jenna.png"
                  data-user-popover={0}
                  alt=""
                />
                <div className="badge">
                  <i data-feather="check" />
                </div>
              </div>
              <h4>Jenna Davis</h4>
              <p>Melbourne, AU</p>
            </div>
            <div className="user-menu">
              <div className="user-menu-inner has-slimscroll">
                <div className="menu-block">
                  <ul>
                    <li data-section="general" className="is-active">
                      <a>
                        <i data-feather="settings" />
                        <span>General</span>
                      </a>
                    </li>
                    <li data-section="security">
                      <a>
                        <i data-feather="shield" />
                        <span>Security</span>
                      </a>
                    </li>
                    <li data-section="personal">
                      <a>
                        <i data-feather="alert-triangle" />
                        <span>Account</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="separator" />
                <div className="menu-block">
                  <ul>
                    <li data-section="privacy">
                      <a>
                        <i data-feather="lock" />
                        <span>Privacy</span>
                      </a>
                    </li>
                    <li data-section="preferences">
                      <a>
                        <i data-feather="sliders" />
                        <span>Preferences</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="separator" />
                <div className="menu-block">
                  <ul>
                    <li data-section="notifications">
                      <a>
                        <i data-feather="bell" />
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li data-section="support">
                      <a>
                        <i data-feather="life-buoy" />
                        <span>Help</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-wrapper">
          <Switch>
            <Route exact path="/general" component={General} />
              {/* <General />
            </Route> */}
            <Route exact path="/security">
              <Help />
            </Route>
            <Route exact path="/account">
              <Personal />
            </Route>
          </Switch>
          {/* /partials/settings/sections/general-settings.html */}
          {/* <General /> */}
          {/* /partials/settings/sections/security-settings.html */}
          {/* <Security /> */}
          {/* /partials/settings/sections/personal-settings.html */}
          {/* <Personal /> */}
          {/* /partials/settings/sections/privacy-settings.html */}
          {/* <Privacy /> */}
          {/* /partials/settings/sections/preferences-settings.html */}
          {/* <Interests /> */}
          {/* /partials/settings/sections/notifications-settings.html */}
          {/* <Notifications /> */}
          {/* /partials/settings/sections/support-settings.html */}
          
          </div>
      </div>
    </div>
  );
}

export default UserProfile;
