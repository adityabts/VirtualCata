import React, { Component } from 'react'

export const Personal = (props) => {
    return (
        <div id="personal-settings" className="settings-section is-active">
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
      
    )
}

export default Personal
