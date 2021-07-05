import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../core/NavBar/NavBar";
import General from './General';
import Security from './Security';
import Personal from './Personal';
import Privacy from "./Privacy";
import Interests from "./Interests";
import Notifications from "./Notifications";
import Help from "./Help";
import SideBar from "./SettingsSideBar";


function UserProfile(props) {
  const {match} = props;
  console.log("UF",props)
  return (
    <Fragment>
      <NavBar />
      <SideBar {...props} />
      <div class="view-wrapper is-full">
        <div className="settings-wrapper">
          <Switch>
            <Route exact path="/userProfile/general" render={() => <General {...props}/>} />
            <Route exact path="/userProfile/help" render={() => <Help {...props}/>} />
            <Route exact path="/userProfile/preferences" render={() => <Interests {...props}/>} />
            <Route exact path="/userProfile/notifications" render={() => <Notifications {...props}/>} />
            <Route exact path="/userProfile/account" render={() => <Personal {...props}/>} />
            <Route exact path="/userProfile/privacy" render={() => <Privacy {...props}/>} />
            <Route exact path="/userProfile/security" render={() => <Security {...props}/>} />
            <Redirect path="/userProfile" to="/userProfile/general" />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default UserProfile;
