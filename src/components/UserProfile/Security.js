import React from 'react'

export const Security = (props) => {
    return (
        <div id="security-settings" className="settings-section is-active">
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
    )
}

export default Security
