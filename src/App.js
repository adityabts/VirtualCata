import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
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
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<NavBar />
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/sidebar" component={SideBar} />
				<Route exact path="/topbar" component={DesktopNavBar} />
				<Route exact path="/mobilebar" component={MobileNavBar} />
				<Route exact path="/navbar" component={NavBar} />
				<Route exact path="/template" component={Blank} />
				<Route exact path="/landing" component={EventLandingPage} />
				<Route exact path="/live" component={LiveEvent} />
				<Route exact path="/past" component={PastEvent} />
				<Route exact path="/adminProfile" component={AdminProfile} />
				<Route exact path="/adminAbout" component={AdminAbout} />
				<Route path="/userProfile" component={UserProfile} />
				<Route exact path="/home" component={Home} />	
				<Redirect path="/" to="/home" />
			</Switch>
		</Fragment>
	);
}

export default App;
