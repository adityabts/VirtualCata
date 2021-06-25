import React from "react";

function NavMob() {
  return (
    <nav
      className="navbar mobile-navbar is-hidden-desktop"
      aria-label="main navigation">
      {/* Brand */}
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            className="light-image"
            src="assets/img/logo/friendkit-bold.svg"
            alt=""
          />
          <img
            className="dark-image"
            src="assets/img/logo/friendkit-white.svg"
            alt=""
          />
        </a>
        <div id="mobile-explorer-trigger" className="navbar-item is-icon">
          <a className="icon-link is-primary">
            <i className="mdi mdi-apps" />
          </a>
        </div>
        <div className="navbar-item is-icon drop-trigger">
          <a className="icon-link" href="javascript:void(0);">
            <i data-feather="bell" />
            <span className="indicator" />
          </a>
          <div className="nav-drop">
            <div className="inner">
              <div className="nav-drop-header">
                <span>Notifications</span>
                <a href="#">
                  <i data-feather="bell" />
                </a>
              </div>
              <div className="nav-drop-body is-notifications">
                {/* Notification */}
                <div className="media">
                  <figure className="media-left">
                    <p className="image">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/david.jpg"
                        alt=""
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <span>
                      <a href="#">David Kim</a> commented on{" "}
                      <a href="#">your post</a>.
                    </span>
                    <span className="time">30 minutes ago</span>
                  </div>
                  <div className="media-right">
                    <div className="added-icon">
                      <i data-feather="message-square" />
                    </div>
                  </div>
                </div>
                {/* Notification */}
                <div className="media">
                  <figure className="media-left">
                    <p className="image">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/daniel.jpg"
                        alt=""
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <span>
                      <a href="#">Daniel Wellington</a> liked your{" "}
                      <a href="#">profile.</a>
                    </span>
                    <span className="time">43 minutes ago</span>
                  </div>
                  <div className="media-right">
                    <div className="added-icon">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
                {/* Notification */}
                <div className="media">
                  <figure className="media-left">
                    <p className="image">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/stella.jpg"
                        alt=""
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <span>
                      <a href="#">Stella Bergmann</a> shared a{" "}
                      <a href="#">New video</a> on your wall.
                    </span>
                    <span className="time">Yesterday</span>
                  </div>
                  <div className="media-right">
                    <div className="added-icon">
                      <i data-feather="youtube" />
                    </div>
                  </div>
                </div>
                {/* Notification */}
                <div className="media">
                  <figure className="media-left">
                    <p className="image">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/elise.jpg"
                        alt=""
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <span>
                      <a href="#">Elise Walker</a> shared an{" "}
                      <a href="#">Image</a> with you an 2 other people.
                    </span>
                    <span className="time">2 days ago</span>
                  </div>
                  <div className="media-right">
                    <div className="added-icon">
                      <i data-feather="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-drop-footer">
                <a href="#">View All</a>
              </div>
            </div>
          </div>
        </div>
        <div id="open-mobile-search" className="navbar-item is-icon">
          <a className="icon-link is-primary" href="javascript:void(0);">
            <i data-feather="search" />
          </a>
        </div>
        {/* Mobile menu toggler icon */}
        <div className="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      {/* Navbar mobile menu */}
      <div className="navbar-menu">
        {/* Account */}
        <div className="navbar-item has-dropdown is-active">
          <a href="/navbar-v1-profile-main.html" className="navbar-link">
            <img
              src="https://via.placeholder.com/150x150"
              data-demo-src="assets/img/avatars/jenna.png"
              alt=""
            />
            <span className="is-heading">Jenna Davis</span>
            <label className="theme-toggle">
              <input type="checkbox" />
              <span className="toggler">
                <span className="dark">
                  <i data-feather="moon" />
                </span>
                <span className="light">
                  <i data-feather="sun" />
                </span>
              </span>
            </label>
          </a>
        </div>
        {/* More */}
        <div className="navbar-item has-dropdown">
          <a href="/navbar-v1-settings.html" className="navbar-link">
            <i data-feather="user" />
            <span className="is-heading">Account</span>
          </a>
          {/* Mobile Dropdown */}
          <div className="navbar-dropdown">
            <a href="#" className="navbar-item is-flex is-mobile-icon">
              <span>
                <i data-feather="life-buoy" />
                Support
              </span>
            </a>
            <a
              href="/navbar-v1-settings.html"
              className="navbar-item is-flex is-mobile-icon">
              <span>
                <i data-feather="settings" />
                Settings
              </span>
            </a>
            <a href="#" className="navbar-item is-flex is-mobile-icon">
              <span>
                <i data-feather="log-out" />
                Logout
              </span>
            </a>
          </div>
        </div>
      </div>
      {/*Search*/}
      <div className="mobile-search is-hidden">
        <div className="control">
          <input
            id="tipue_drop_input_mobile"
            className="input"
            placeholder="Search..."
          />
          <div className="form-icon">
            <i data-feather="search" />
          </div>
          <div className="close-icon">
            <i data-feather="x" />
          </div>
          <div id="tipue_drop_content_mobile" className="tipue-drop-content" />
        </div>
      </div>
    </nav>
  );
}

export default NavMob;
