import React from "react";
import SideBar from "../core/SideBar/SideBar";
import NavBar from "../core/NavBar/NavBar";
import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import { Switch, Route } from "react-router";

export default function Blank() {
	return (
		<div>
			<NavBar />
				<Switch>
					{/* <Route path="/" component={Signup} /> */}
					<Route exact path="/home" component={Login} />
				</Switch>
			<Link to="/home">Tejas</Link>
		</div>
	);
}
