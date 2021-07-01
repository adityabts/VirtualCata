import React from 'react'

function Help() {
    return (
        <div id="support-settings" className="settings-section is-active">
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
        
    )
}

export default Help
