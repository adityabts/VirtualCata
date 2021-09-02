import { Switch, Route, Redirect } from "react-router-dom";
import User from './components/User';
import EventLandingPage from "./components/Events/EventLandingPage";
import FeedBack from "./components/Events/EventFeedback";
import LiveEvent from "./components/Events/LiveEvent";
import PastEvent from "./components/Events/PastEvent";
import AdminProfile from "./components/Profile/AdminProfile";
import AdminAbout from "./components/Profile/AdminAbout";
import UserProfile from "./components/UserProfile/UserProfile";
import { Fragment, useState, useEffect } from "react";
import authContext from "./Context/authContext";
import NavBar from "./components/core/NavBar/NavBar";
import Home from "./components/Home/Home";
import { getCurrentUser } from "./utils/user"

function App(props) {
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



  const currentUser = getCurrentUser();

  return (
    <Fragment>
      {/* <NavBar user={currentUser} /> */}
      <Switch>
        <authContext.Provider value={{ allData, setAllData }}>
          <Route path="/user" render={User} />
          <Route path="/home" render={() => <Home user={currentUser} {...props}/>} />
          <Route exact path="/landing/:id" component={EventLandingPage} />
          <Route exact path="/live" component={LiveEvent} />
          <Route exact path="/past" component={PastEvent} />
          <Route exact path="/adminProfile" component={AdminProfile} />
          <Route exact path="/adminAbout" component={AdminAbout} />
          <Route exact path="/feedback/:id" component={FeedBack} />
          <Route path="/userProfile" component={UserProfile} />
          <Route exact path="/" component={User} />
        </authContext.Provider>
      </Switch>
    </Fragment>
  );
}

export default App;
