import React from 'react'

export default function MobileNavBar() {
    return (
        <div>
        <nav className="navbar mobile-navbar is-hidden-desktop" aria-label="main navigation">
          {/* Brand */}
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img className="light-image" src="assets/img/logo/friendkit-bold.svg" alt="" />
              <img className="dark-image" src="assets/img/logo/friendkit-white.svg" alt="" />
            </a>
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
                          <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <span><a href="#">David Kim</a> commented on <a href="#">your post</a>.</span>
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
                          <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <span><a href="#">Daniel Wellington</a> liked your <a href="#">profile.</a></span>
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
                          <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <span><a href="#">Stella Bergmann</a> shared a <a href="#">New video</a> on your wall.</span>
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
                          <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <span><a href="#">Elise Walker</a> shared an <a href="#">Image</a> with you an 2 other people.</span>
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
            <div id="mobile-explorer-trigger" className="navbar-item is-icon">
              <a className="icon-link is-primary">
                <i className="mdi mdi-apps" />
              </a>
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
                <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                <span className="is-heading">Jenna Davis</span>
              </a>
              {/* Mobile Dropdown */}
              <div className="navbar-dropdown">
                <a href="/navbar-v1-feed.html" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="activity" />Feed</span>
                  <span className="menu-badge">87</span>
                </a>
                <a href="/navbar-v1-videos-home-v2.html" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="play-circle" />Watch</span>
                  <span className="menu-badge">21</span>
                </a>
                <a href="/navbar-v1-profile-friends.html" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="heart" />Friend Requests</span>
                  <span className="menu-badge">3</span>
                </a>
                <a href="/navbar-v1-profile-main.html" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="user" />Profile</span>
                </a>
                <a href="/navbar-v1-ecommerce-cart.html" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="shopping-cart" />Cart</span>
                  <span className="menu-badge">3</span>
                </a>
                <a href="#" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="bookmark" />Bookmarks</span>
                </a>
              </div>
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
                  <span><i data-feather="life-buoy" />Support</span>
                </a>
                <a href="/navbar-v1-settings.html" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="settings" />Settings</span>
                </a>
                <a href="#" className="navbar-item is-flex is-mobile-icon">
                  <span><i data-feather="log-out" />Logout</span>
                </a>
              </div>
            </div>
          </div>
          {/*Search*/}
          <div className="mobile-search is-hidden">
            <div className="control">
              <input id="tipue_drop_input_mobile" className="input" placeholder="Search..." />
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
        <div className="explorer-menu">
          <div className="explorer-inner">
            <div className="explorer-container">
              {/*Header*/}
              <div className="explorer-header">
                <h3>Explore</h3>
                <div className="control">
                  <input type="text" className="input is-rounded is-fade" placeholder="Filter" />
                  <div className="form-icon">
                    <i data-feather="filter" />
                  </div>
                </div>
              </div>
              {/*List*/}
              <div className="explore-list has-slimscroll">
                {/*item*/}
                <a href="/navbar-v1-feed.html" className="explore-item">
                  <img src="assets/img/icons/explore/clover.svg" alt="" />
                  <h4>Feed</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-profile-friends.html" className="explore-item">
                  <img src="assets/img/icons/explore/friends.svg" alt="" />
                  <h4>Friends</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-videos-home.html" className="explore-item">
                  <img src="assets/img/icons/explore/videos.svg" alt="" />
                  <h4>Videos</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-pages-main.html" className="explore-item">
                  <img src="assets/img/icons/explore/tag-euro.svg" alt="" />
                  <h4>Pages</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-ecommerce-products.html" className="explore-item">
                  <img src="assets/img/icons/explore/cart.svg" alt="" />
                  <h4>Commerce</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-groups.html" className="explore-item">
                  <img src="assets/img/icons/explore/house.svg" alt="" />
                  <h4>Interests</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-stories-main.html" className="explore-item">
                  <img src="assets/img/icons/explore/chrono.svg" alt="" />
                  <h4>Stories</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-questions-home.html" className="explore-item">
                  <img src="assets/img/icons/explore/question.svg" alt="" />
                  <h4>Questions</h4>
                </a>
                {/*item*/}
                <a href="news.html" className="explore-item">
                  <img src="assets/img/icons/explore/news.svg" alt="" />
                  <h4>News</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-groups.html" className="explore-item">
                  <img src="assets/img/icons/explore/cake.svg" alt="" />
                  <h4>Groups</h4>
                </a>
                {/*item*/}
                <a href="https://envato.com" className="explore-item">
                  <img src="assets/img/icons/explore/envato.svg" alt="" />
                  <h4>Envato</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-events.html" className="explore-item">
                  <img src="assets/img/icons/explore/calendar.svg" alt="" />
                  <h4>Events</h4>
                </a>
                {/*item*/}
                <a href="https://cssninja.io" target="_blank" className="explore-item">
                  <img src="assets/img/icons/explore/pin.svg" alt="" />
                  <h4>Css Ninja</h4>
                </a>
                {/*item*/}
                <a href="/elements.html" className="explore-item">
                  <img src="assets/img/icons/explore/idea.svg" alt="" />
                  <h4>Elements</h4>
                </a>
                {/*item*/}
                <a href="/navbar-v1-settings.html" className="explore-item">
                  <img src="assets/img/icons/explore/settings.svg" alt="" />
                  <h4>Settings</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
