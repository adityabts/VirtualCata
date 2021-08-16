import React from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import { getCurrentUser } from "../../../utils/user"

export default function NavBar(props) {
	const currentUser = getCurrentUser();
	return (
		<div>
			<DesktopNavBar {...props} user={currentUser}/>
			<MobileNavBar {...props} user={currentUser}/>
		</div>
	);
}
