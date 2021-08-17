import { Switch, Route, Redirect } from "react-router-dom";
<<<<<<< Updated upstream
import SideBar from "./components/core/SideBar/SideBar";
import DesktopNavBar from "./components/core/NavBar/DesktopNavBar";
import MobileNavBar from "./components/core/NavBar/MobileNavBar";
import NavBar from "./components/core/NavBar/NavBar";
import Blank from "./components/pages/Template";
import Home from "./components/Home/Home";
=======
import User from "./components/User";
>>>>>>> Stashed changes
import EventLandingPage from "./components/Events/EventLandingPage";
import LiveEvent from "./components/Events/LiveEvent";
import PastEvent from "./components/Events/PastEvent";
import AdminProfile from "./components/Profile/AdminProfile";
import AdminAbout from "./components/Profile/AdminAbout";
import UserProfile from "./components/UserProfile/UserProfile";
import { Fragment, useState } from "react";
import authContext from "./Context/authContext";
<<<<<<< Updated upstream
=======
import NavBar from "./components/core/NavBar/NavBar";
import Home from "./components/Home/Home";
import { getCurrentUser } from "./utils/user";
>>>>>>> Stashed changes

import User from "./components/User";



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

<<<<<<< Updated upstream
=======
  const currentUser = getCurrentUser();

>>>>>>> Stashed changes
  return (
    <Fragment>
      {/* <NavBar /> */}
      <Switch>
        <authContext.Provider value={{ allData, setAllData }}>
<<<<<<< Updated upstream
          <Route path="/user" component={User} />

          <Route exact path="/landing" component={EventLandingPage} />
=======
          <Route path="/user" render={User} />
          <Route
            path="/home"
            render={() => <Home user={currentUser} {...props} />}
          />
          <Route exact path="/landing/:eventId" component={EventLandingPage} />
>>>>>>> Stashed changes
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
