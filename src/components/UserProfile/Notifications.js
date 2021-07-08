import React, { Component } from 'react'

export const Notifications = (props) => {
  return (
      <div id="notifications-settings" className="settings-section is-active">
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
  )
}

export default Notifications
