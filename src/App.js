import { Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import SideBar from "./components/core/SideBar";
import DesktopNavBar from "./components/core/DesktopNavBar";
import MobileNavBar from "./components/core/MobileNavBar";
import NavBar from "./components/core/NavBar";
import Blank from "./components/pages/blankTeemplate";
import Home from "./components/Home/Home";

function App() {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/sidebar" component={SideBar} />
      <Route exact path="/topbar" component={DesktopNavBar} />
      <Route exact path="/mobilebar" component={MobileNavBar} />
      <Route exact path="/navbar" component={NavBar} />
      <Route exact path="/template" component={Blank} />

      <Route exact path="/home" component={Home} />
    </Switch>
  );
}

export default App;
