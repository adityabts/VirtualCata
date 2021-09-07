import React, { useEffect, useState } from 'react';
import { FiMonitor } from 'react-icons/fi';
import { getInterestCategories, updateUserInterestCategories } from '../../services/profile.services';

export const Interests = (props) => {

  
  const [interestsList, setInterestList] = useState([]);

  useEffect(() => {
    getInterestCategories()
    .then((interests) => {
      console.log("Interests", interests);
      setInterestList(interests);
    })
    .catch((error) => console.error(error))
  }, [])

  return (
      <div id="preferences-settings" className="settings-section is-active">
      <div className="settings-panel">
        <div className="title-wrap">
          <a className="mobile-sidebar-trigger">
            <i data-feather="menu" />
          </a>
          <h2>Interests</h2>
        </div>
        <div className="settings-form-wrapper">
          <div className="settings-form">
            <div className="columns is-multiline flex-portrait">
              {/*link*/}
              {interestsList.map((item) => (<div className="column is-4">
                <a className="setting-sublink">
                  <div className="link-content">
                    <img src={item.ImageURL} className="link-icon"/>
                    <h4>{item.CategoryName}</h4>
                  </div>
                </a>
              </div>))}
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

export default Interests
