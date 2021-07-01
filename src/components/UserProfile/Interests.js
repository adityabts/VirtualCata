import React, { Component } from 'react'

export class Interests extends Component {
    render() {
        return (
            <div id="preferences-settings" className="settings-section is-active">
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
          
        )
    }
}

export default Interests
