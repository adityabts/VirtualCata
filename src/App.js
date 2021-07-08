import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ResetPassword from "./components/Auth/ResetPassword";
import ForgotPassword from "./components/Auth/ForgotPassword";
import SideBar from "./components/core/SideBar/SideBar";
import DesktopNavBar from "./components/core/NavBar/DesktopNavBar";
import MobileNavBar from "./components/core/NavBar/MobileNavBar";
import NavBar from "./components/core/NavBar/NavBar";
import Blank from "./components/pages/Template";
import Home from "./components/Home/Home";
import EventLandingPage from "./components/Events/EventLandingPage";
import LiveEvent from "./components/Events/LiveEvent";
import PastEvent from "./components/Events/PastEvent";
import AdminProfile from "./components/Profile/AdminProfile";
import AdminAbout from "./components/Profile/AdminAbout";
import UserProfile from "./components/UserProfile/UserProfile";
import { Fragment, useState } from "react";
import authContext from "./Context/authContext";

function App() {
  let initialState = {
    isAuthenticated: false,
    token: "",
    validToken: false,
    msgToDisplay: "",
    msgType: "",
    msgOn: "",
    userDetails: {
      givenName: null,
      familyName: null,
      imageUrl: null,
      email: null,
    },
  };
  const [allData, setAllData] = useState(initialState);

  return (
    <Fragment>
      {/* <NavBar /> */}
      <Switch>
        <authContext.Provider value={{ allData, setAllData }}>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/landing" component={EventLandingPage} />
          <Route exact path="/live" component={LiveEvent} />
          <Route exact path="/past" component={PastEvent} />
          <Route exact path="/adminProfile" component={AdminProfile} />
          <Route exact path="/adminAbout" component={AdminAbout} />
          <Route path="/userProfile" component={UserProfile} />
          <Route exact path="/home" component={Home} />
        </authContext.Provider>
      </Switch>
    </Fragment>
  );
}

export default App;
