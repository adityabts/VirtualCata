import React from "react";
import NavBar from "../core/NavBar";

function UserProfile() {
  return (
    <div>
      <NavBar />
      <div className="view-wrapper is-full">
        {/* /partials/settings/settings-sidebar.html */}
        <div className="settings-sidebar is-active">
          <div className="settings-sidebar-inner">
            <div className="user-block">
              <a className="close-settings-sidebar is-hidden">
                <i data-feather="x" />
              </a>
              <div className="avatar-wrap">
                <img
                  src="https://via.placeholder.com/150x150"
                  data-demo-src="assets/img/avatars/jenna.png"
                  data-user-popover={0}
                  alt=""
                />
                <div className="badge">
                  <i data-feather="check" />
                </div>
              </div>
              <h4>Jenna Davis</h4>
              <p>Melbourne, AU</p>
            </div>
            <div className="user-menu">
              <div className="user-menu-inner has-slimscroll">
                <div className="menu-block">
                  <ul>
                    <li data-section="general" className="is-active">
                      <a>
                        <i data-feather="settings" />
                        <span>General</span>
                      </a>
                    </li>
                    <li data-section="security">
                      <a>
                        <i data-feather="shield" />
                        <span>Security</span>
                      </a>
                    </li>
                    <li data-section="personal">
                      <a>
                        <i data-feather="alert-triangle" />
                        <span>Account</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="separator" />
                <div className="menu-block">
                  <ul>
                    <li data-section="privacy">
                      <a>
                        <i data-feather="lock" />
                        <span>Privacy</span>
                      </a>
                    </li>
                    <li data-section="preferences">
                      <a>
                        <i data-feather="sliders" />
                        <span>Preferences</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="separator" />
                <div className="menu-block">
                  <ul>
                    <li data-section="notifications">
                      <a>
                        <i data-feather="bell" />
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li data-section="support">
                      <a>
                        <i data-feather="life-buoy" />
                        <span>Help</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-wrapper">
          {/* /partials/settings/sections/general-settings.html */}
          <div id="general-settings" className="settings-section is-active">
            <div className="settings-panel">
              <div className="title-wrap">
                <a className="mobile-sidebar-trigger">
                  <i data-feather="menu" />
                </a>
                <h2>General Settings</h2>
              </div>
              <div className="settings-form-wrapper">
                <div className="settings-form">
                  <div className="columns is-multiline">
                    <div className="column is-6">
                      {/*Field*/}
                      <div className="field field-group">
                        <label>First Name</label>
                        <div className="control has-icon">
                          <input
                            type="text"
                            className="input is-fade"
                            defaultValue="Jenna"
                          />
                          <div className="form-icon">
                            <i data-feather="user" />
                          </div>
                        </div>
                      </div>
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Email</label>
                        <div className="control has-icon">
                          <input
                            type="text"
                            className="input is-fade"
                            defaultValue="jennadavis@gmail.com"
                          />
                          <div className="form-icon">
                            <i data-feather="mail" />
                          </div>
                        </div>
                      </div>
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Year of Birth</label>
                        <div className="control has-icon">
                          <input
                            type="number"
                            className="input is-fade"
                            defaultValue={1994}
                          />
                          <div className="form-icon">
                            <i data-feather="calendar" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Last Name</label>
                        <div className="control has-icon">
                          <input
                            type="text"
                            className="input is-fade"
                            defaultValue="Davis"
                          />
                          <div className="form-icon">
                            <i data-feather="user" />
                          </div>
                        </div>
                      </div>
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Mobile Number</label>
                        <div className="control has-icon">
                          <input
                            type="text"
                            className="input is-fade"
                            defaultValue="+91 90909 1234"
                          />
                          <div className="form-icon">
                            <i data-feather="phone" />
                          </div>
                        </div>
                      </div>
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Zip Code</label>
                        <div className="control has-icon">
                          <input
                            type="text"
                            className="input is-fade"
                            defaultValue={440009}
                          />
                          <div className="form-icon">
                            <i data-feather="compass" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-12">
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Address</label>
                        <div className="control">
                          <textarea
                            type="text"
                            className="textarea is-fade"
                            rows={1}
                            placeholder="Fill in your address..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-12">
                      {/*Field*/}
                      <div className="form-text">
                        <p>
                          Be sure to fill out your location settings. This will
                          help us suggest you relevant friends and places you
                          could like.
                        </p>
                      </div>
                    </div>
                    <div className="column is-6">
                      {/*Field*/}
                      <div className="field field-group">
                        <label>City</label>
                        <div className="control has-icon">
                          <input
                            type="text"
                            className="input is-fade"
                            defaultValue="Melbourne"
                          />
                          <div className="form-icon">
                            <i data-feather="map-pin" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      {/*Field*/}
                      <div className="field field-group is-autocomplete">
                        <label>Country</label>
                        <div className="control has-icon">
                          <input
                            id="country-autocpl"
                            type="text"
                            className="input is-fade"
                            defaultValue="Australia"
                          />
                          <div className="form-icon">
                            <i data-feather="globe" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-12">
                      <div className="buttons">
                        <button className="button is-solid accent-button form-button">
                          Save Changes
                        </button>
                        <button className="button is-light form-button">
                          Advanced
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="illustration">
                  <img
                    className="light-image"
                    src="assets/img/illustrations/settings/1.svg"
                    alt=""
                  />
                  <img
                    className="dark-image"
                    src="assets/img/illustrations/settings/1-dark.svg"
                    alt=""
                  />
                  <p>
                    If you'd like to learn more about general settings, you can
                    read about it in the <a>user guide</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /partials/settings/sections/security-settings.html */}
          <div id="security-settings" className="settings-section">
            <div className="settings-panel">
              <div className="title-wrap">
                <a className="mobile-sidebar-trigger">
                  <i data-feather="menu" />
                </a>
                <h2>Security</h2>
              </div>
              <div className="settings-form-wrapper">
                <div className="settings-form">
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Current Password</label>
                        <div className="control has-icon">
                          <input
                            type="password"
                            className="input is-fade"
                            defaultValue="testpassword"
                          />
                          <div className="form-icon">
                            <i data-feather="lock" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      {/*Field*/}
                      <div className="field field-group">
                        <label>New Password</label>
                        <div className="control has-icon">
                          <input
                            type="password"
                            className="input is-fade"
                            defaultValue
                          />
                          <div className="form-icon">
                            <i data-feather="lock" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      {/*Field*/}
                      <div className="field field-group">
                        <label>Repeat Password</label>
                        <div className="control has-icon">
                          <input
                            type="password"
                            className="input is-fade"
                            defaultValue
                          />
                          <div className="form-icon">
                            <i data-feather="lock" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-12">
                      <div className="buttons">
                        <button className="button is-solid accent-button form-button">
                          Save Changes
                        </button>
                        <button className="button is-light form-button">
                          Advanced
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="illustration">
                  <img src="assets/img/illustrations/settings/2.svg" alt="" />
                  <p>
                    If you'd like to learn more about security settings, you can
                    read about it in the <a>user guide</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /partials/settings/sections/personal-settings.html */}
          <div id="personal-settings" className="settings-section">
            <div className="settings-panel">
              <div className="title-wrap">
                <a className="mobile-sidebar-trigger">
                  <i data-feather="menu" />
                </a>
                <h2>Personal</h2>
              </div>
              <div className="settings-form-wrapper">
                <div className="settings-form">
                  <div className="columns is-multiline flex-portrait">
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="user" />
                          </div>
                          <h4>Personal Info</h4>
                          <p>Access your personal info</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="clock" />
                          </div>
                          <h4>History</h4>
                          <p>Access private history</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="download-cloud" />
                          </div>
                          <h4>Download</h4>
                          <p>Download your data</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="codepen" />
                          </div>
                          <h4>Connected Apps</h4>
                          <p>Manage connected apps</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="credit-card" />
                          </div>
                          <h4>Payment Info</h4>
                          <p>Manage payment info</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="hexagon" />
                          </div>
                          <h4>Account</h4>
                          <p>Manage account info</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="github" />
                          </div>
                          <h4>Integrations</h4>
                          <p>Manage integrations</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="shopping-cart" />
                          </div>
                          <h4>Shop Settings</h4>
                          <p>Manage your store</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="database" />
                          </div>
                          <h4>System Settings</h4>
                          <p>Manage preferences</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="illustration">
                  <img
                    className="light-image"
                    src="assets/img/illustrations/settings/3.svg"
                    alt=""
                  />
                  <img
                    className="dark-image"
                    src="assets/img/illustrations/settings/3-dark.svg"
                    alt=""
                  />
                  <p>
                    If you'd like to learn more about account settings, you can
                    read about it in the <a>user guide</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /partials/settings/sections/privacy-settings.html */}
          <div id="privacy-settings" className="settings-section">
            <div className="settings-panel">
              <div className="title-wrap">
                <a className="mobile-sidebar-trigger">
                  <i data-feather="menu" />
                </a>
                <h2>Privacy Settings</h2>
              </div>
              <div className="settings-form-wrapper">
                <div className="settings-form">
                  <div className="columns is-multiline">
                    <div className="column is-8">
                      {/*Field*/}
                      <div className="field spaced-field">
                        <div className="switch-block">
                          <label className="f-switch">
                            <input
                              type="checkbox"
                              className="is-switch"
                              defaultChecked
                            />
                            <i />
                          </label>
                          <div className="meta">
                            <h4>Public Profile</h4>
                            <p>
                              Enable to make your profile viewable by anyone.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*Field*/}
                      <div className="field spaced-field">
                        <div className="switch-block">
                          <label className="f-switch is-accent">
                            <input type="checkbox" className="is-switch" />
                            <i />
                          </label>
                          <div className="meta">
                            <h4>Public Posts</h4>
                            <p>Enable to make your posts viewable by anyone.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="illustration">
                  <img
                    className="light-image"
                    src="assets/img/illustrations/settings/4.svg"
                    alt=""
                  />
                  <img
                    className="dark-image"
                    src="assets/img/illustrations/settings/4-dark.svg"
                    alt=""
                  />
                  <p>
                    If you'd like to learn more about privacy settings, you can
                    read about it in the <a>user guide</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /partials/settings/sections/preferences-settings.html */}
          <div id="preferences-settings" className="settings-section">
            <div className="settings-panel">
              <div className="title-wrap">
                <a className="mobile-sidebar-trigger">
                  <i data-feather="menu" />
                </a>
                <h2>Preferences</h2>
              </div>
              <div className="settings-form-wrapper">
                <div className="settings-form">
                  <div className="columns is-multiline flex-portrait">
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="monitor" />
                          </div>
                          <h4>Food &amp; Beverages</h4>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                  </div>
                </div>
                <div className="illustration">
                  <img
                    className="light-image"
                    src="assets/img/illustrations/settings/5.svg"
                    alt=""
                  />
                  <img
                    className="dark-image"
                    src="assets/img/illustrations/settings/5-dark.svg"
                    alt=""
                  />
                  <p>
                    If you'd like to learn more about preferences settings, you
                    can read about it in the <a>user guide</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /partials/settings/sections/notifications-settings.html */}
          <div id="notifications-settings" className="settings-section">
            <div className="settings-panel">
              <div className="title-wrap">
                <a className="mobile-sidebar-trigger">
                  <i data-feather="menu" />
                </a>
                <h2>Notifications</h2>
              </div>
              <div className="settings-form-wrapper">
                <div className="settings-form">
                  <div className="columns is-multiline">
                    <div className="column is-8">
                      <div className="sub-heading">
                        <h3>General notifications</h3>
                      </div>
                      {/*Field*/}
                      <div className="field spaced-field">
                        <div className="switch-block">
                          <label className="f-switch">
                            <input
                              type="checkbox"
                              className="is-switch"
                              defaultChecked
                            />
                            <i />
                          </label>
                          <div className="meta">
                            <h4>Notifications</h4>
                            <p>Enable to activate notifications.</p>
                          </div>
                        </div>
                      </div>
                      {/*Field*/}
                      <div className="field spaced-field">
                        <div className="switch-block">
                          <label className="f-switch is-accent">
                            <input type="checkbox" className="is-switch" />
                            <i />
                          </label>
                          <div className="meta">
                            <h4>Sounds</h4>
                            <p>Enable to play a sound on new notification.</p>
                          </div>
                        </div>
                      </div>
                      <div className="sub-heading">
                        <h3>Chat notifications</h3>
                      </div>
                      {/*Field*/}
                      <div className="field spaced-field">
                        <div className="switch-block">
                          <label className="f-switch is-accent">
                            <input
                              type="checkbox"
                              className="is-switch"
                              defaultChecked
                            />
                            <i />
                          </label>
                          <div className="meta">
                            <h4>New Message</h4>
                            <p>Enable to receive new message notifications.</p>
                          </div>
                        </div>
                      </div>
                      {/*Field*/}
                      <div className="field">
                        <div className="switch-block">
                          <label className="f-switch is-accent">
                            <input
                              type="checkbox"
                              className="is-switch"
                              defaultChecked
                            />
                            <i />
                          </label>
                          <div className="meta">
                            <h4>New Participant</h4>
                            <p>
                              Enable to receive new participant notifications.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="sub-heading">
                        <h3>Payment notifications</h3>
                      </div>
                      {/*Field*/}
                      <div className="field spaced-field">
                        <div className="switch-block">
                          <label className="f-switch is-accent">
                            <input
                              type="checkbox"
                              className="is-switch"
                              defaultChecked
                            />
                            <i />
                          </label>
                          <div className="meta">
                            <h4>Payment Status</h4>
                            <p>
                              Enable to receive a notification on payment status
                              change.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="illustration">
                  <img src="assets/img/illustrations/settings/6.svg" alt="" />
                  <p>
                    If you'd like to learn more about notifications settings,
                    you can read about it in the <a>user guide</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /partials/settings/sections/support-settings.html */}
          <div id="support-settings" className="settings-section">
            <div className="settings-panel">
              <div className="title-wrap">
                <a className="mobile-sidebar-trigger">
                  <i data-feather="menu" />
                </a>
                <h2>Assistance</h2>
              </div>
              <div className="settings-form-wrapper">
                <div className="settings-form">
                  <div className="columns is-multiline flex-portrait">
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="book-open" />
                          </div>
                          <h4>User Guide</h4>
                          <p>Learn more about the app</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="mail" />
                          </div>
                          <h4>Message</h4>
                          <p>Contact the support team</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="message-circle" />
                          </div>
                          <h4>Chat</h4>
                          <p>Chat with support</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="slash" />
                          </div>
                          <h4>Blocked Users</h4>
                          <p>Manage blocked users</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="archive" />
                          </div>
                          <h4>Archives</h4>
                          <p>Manage archives</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="flag" />
                          </div>
                          <h4>Report</h4>
                          <p>Report offenses</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="award" />
                          </div>
                          <h4>Rewards</h4>
                          <p>See your rewards</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="check-circle" />
                          </div>
                          <h4>Partners</h4>
                          <p>Partner Programs</p>
                        </div>
                      </a>
                    </div>
                    {/*link*/}
                    <div className="column is-4">
                      <a className="setting-sublink">
                        <div className="link-content">
                          <div className="link-icon">
                            <i data-feather="briefcase" />
                          </div>
                          <h4>Sponsors</h4>
                          <p>Sponsor programs</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="illustration">
                  <img
                    className="light-image"
                    src="assets/img/illustrations/settings/7.svg"
                    alt=""
                  />
                  <img
                    className="dark-image"
                    src="assets/img/illustrations/settings/7-dark.svg"
                    alt=""
                  />
                  <p>
                    If you'd like to learn more about support, you can read
                    about it in the <a>user guide</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
