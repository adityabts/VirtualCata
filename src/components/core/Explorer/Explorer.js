import React from "react";

function Explorer({ isActive }) {
	return (
		<div className={`explorer-menu ${isActive && "is-active"}`}>
			<div className="explorer-inner">
				<div className="explorer-container">
					{/*Header*/}
					<div className="explorer-header">
						<h3>Explore</h3>
					</div>
					{/*List*/}
					<div className="explore-list has-slimscroll">
						{/*item*/}
						<a href="/navbar-v1-feed.html" className="explore-item">
							<img src="assets/img/icons/explore/clover.svg" alt />
							<h4>Home</h4>
						</a>
						{/*item*/}
						<a href="/navbar-v1-events.html" className="explore-item">
							<img src="assets/img/icons/explore/calendar.svg" alt />
							<h4>Events</h4>
						</a>
						{/*item*/}
						<a href="/navbar-v1-groups.html" className="explore-item">
							<img src="assets/img/icons/explore/house.svg" alt />
							<h4>Interests</h4>
						</a>
						{/*item*/}
						<a href="/navbar-v1-settings.html" className="explore-item">
							<img src="assets/img/icons/explore/settings.svg" alt />
							<h4>Settings</h4>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Explorer;
