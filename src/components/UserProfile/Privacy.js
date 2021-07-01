import React, { Component } from 'react'

export class Privacy extends Component {
    render() {
        return (
            <div id="privacy-settings" className="settings-section is-active">
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
          
        )
    }
}

export default Privacy
