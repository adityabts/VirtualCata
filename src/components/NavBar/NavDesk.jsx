import React from "react";
import exploreBar from "./exploreBar";

function DeskNav() {
  return (
    <div
      id="main-navbar"
      className="navbar navbar-v1 is-inline-flex is-transparent no-shadow is-hidden-mobile">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img
              className="logo light-image"
              src="assets/img/logo/friendkit-bold.svg"
              alt=""
              width={112}
              height={28}
            />
            <img
              className="logo dark-image"
              src="assets/img/logo/friendkit-white.svg"
              alt=""
              width={112}
              height={28}
            />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {/* Navbar Search */}
            <div id="explorer-trigger" className="navbar-item is-icon">
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
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div id="global-search" className="control">
                <input
                  id="tipue_drop_input"
                  className="input is-rounded"
                  type="text"
                  placeholder="Search"
                  required
                />
                <span id="clear-search" className="reset-search">
                  <i data-feather="x" />
                </span>
                <span className="search-icon">
                  <i data-feather="search" />
                </span>
                {/* <div id="tipue_drop_content" class="tipue-drop-content"></div> */}
              </div>
            </div>
            <div
              id="account-dropdown"
              className="navbar-item is-account drop-trigger has-caret">
              <div className="user-image">
                <img
                  src="https://via.placeholder.com/400x400"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <span className="indicator" />
              </div>
              <div className="nav-drop is-account-dropdown">
                <div className="inner">
                  <div className="nav-drop-header">
                    <span className="username">Jenna Davis</span>
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
                  </div>
                  <div className="nav-drop-body account-items">
                    <a
                      id="profile-link"
                      href="/profile-main.html"
                      className="account-item">
                      <div className="media">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/400x400"
                              data-demo-src="assets/img/avatars/jenna.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="media-content">
                          <h3>Jenna Davis</h3>
                          <small>Main account</small>
                        </div>
                        <div className="media-right">
                          <i data-feather="check" />
                        </div>
                      </div>
                    </a>
                    <hr className="account-divider" />
                    <a href="/options-settings.html" className="account-item">
                      <div className="media">
                        <div className="icon-wrap">
                          <i data-feather="settings" />
                        </div>
                        <div className="media-content">
                          <h3>Settings</h3>
                          <small>Access widget settings.</small>
                        </div>
                      </div>
                    </a>
                    <a className="account-item">
                      <div className="media">
                        <div className="icon-wrap">
                          <i data-feather="life-buoy" />
                        </div>
                        <div className="media-content">
                          <h3>Help</h3>
                          <small>Contact our support.</small>
                        </div>
                      </div>
                    </a>
                    <a className="account-item">
                      <div className="media">
                        <div className="icon-wrap">
                          <i data-feather="power" />
                        </div>
                        <div className="media-content">
                          <h3>Log out</h3>
                          <small>Log out from your account.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <exploreBar />
    </div>
  );
}

export default DeskNav;
