import React, { useState, useEffect } from "react";
import NavBar from "../core/NavBar/NavBar";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiChevronRight,
  FiPlay,
  FiShare2,
  FiCalendar,
  FiUser,
  FiMapPin,
} from "react-icons/fi";
import { getEventDetails } from "../../services/events.services";
import AddToCalendar from "react-add-to-calendar";

function EventLandingPage({ ...props }) {
  const [eventDetails, setEventDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [calEvent, setCalEvent] = useState();
  const [isActive, setisActive] = useState();

  useEffect(() => {
    setLoading(true);
    getEventDetails({ eventId: props.match.params.eventId }).then(
      (eventData) => {
        console.log("Event Data ::: ", eventData.data);
        setEventDetails(eventData.data);
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (eventDetails) {
      console.log("Event Details :::::: ", eventDetails);

      let eventda = {
        title: eventDetails.EventTitle,
        description: eventDetails.Description,
        location:
          eventDetails.HostDetails.HostAdd +
          " " +
          eventDetails.HostDetails.HostCity +
          " " +
          eventDetails.HostDetails.HostState,
        startTime: eventDetails.EventStartDateTime,
        endTime: "2016-09-16T21:45:00-04:00",
      };
      setCalEvent(eventda);
    }
  }, [eventDetails]);

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    let hr = d.getHours();
    let min = d.getMinutes();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let da = [year, month, day].join("-");
    return `${da}     @  ${hr}:${min}`;
  };

  return (
    <div>
      <NavBar {...props} />
      {eventDetails ? (
        <div className="view-wrapper is-full">
          {/*Wrapper*/}
          <div className="event-page-wrapper">
            {/*Cover*/}
            <div className="event-cover">
              <img
                className="cover-image"
                src={eventDetails.EventThumbnail}
                data-demo-src="assets/img/demo/unsplash/55.jpg"
                alt=""
              />
            </div>
            {/*Main infos*/}
            <div className="event-content">
              <div className="event-head">
                <div className="left">
                  <h2>{eventDetails.EventTitle}</h2>
                  <h3>{formatDate(eventDetails.EventStartDateTime)}</h3>
                  <div className="button-separator">
                    <FiChevronRight />
                  </div>
                  <div className="info-block">
                    <div className="info-head">
                      <div className="event-icon">
                        {/* <i data-feather="calendar" /> */}
                        <FiCalendar />
                      </div>
                      <span>{formatDate(eventDetails.EventStartDateTime)}</span>
                    </div>
                  </div>
                  <div className="info-block">
                    <div className="info-head">
                      <div className="event-icon">
                        {/* <i data-feather="calendar" /> */}
                        <FiUser />
                      </div>
                      <span>
                        {eventDetails.HostDetails.HostName} |{" "}
                        {eventDetails.HostType}
                      </span>
                    </div>
                  </div>
                  <div className="info-block">
                    <div className="info-head">
                      <div className="event-icon">
                        {/* <i data-feather="map-pin" /> */}
                        <FiMapPin />
                      </div>
                      <span>
                        {eventDetails.HostDetails.HostState}{" "}
                        {eventDetails.HostDetails.HostCity}
                      </span>
                    </div>
                    <div className="info-body">
                      <a>{eventDetails.location}</a>
                    </div>
                  </div>
                  <div className="info-block">
                    <div className="info-head">
                      <div className="event-icon">
                        {/* <i data-feather="share-2" /> */}
                        <FiShare2 />
                      </div>
                      <span>Share</span>
                    </div>
                    <div className="info-body">
                      <div className="socials">
                        <a>
                          <FiFacebook />
                        </a>
                        <a>
                          <FiTwitter />
                        </a>
                        <a>
                          <FiLinkedin />
                        </a>
                        <a>
                          <FiInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h2>Subscribe Now</h2>
                  <div className="subscribe-block">
                    <p>Add this event to your calendar</p>
                    <button
                      className="button is-solid primary-button raised"
                      onClick={() => {
                        setisActive("is-active");
                      }}>
                      Add To Calendar
                    </button>

                    <div
                      id="albums-help-modal"
                      class={`modal albums-help-modal is-xsmall has-light-bg ${isActive}`}>
                      <div class="modal-background"></div>
                      <div class="modal-content">
                        <div class="card">
                          <div class="card-heading">
                            <h3>Add To Calendar</h3>
                            <div class="close-wrap">
                              <span
                                class="close-modal"
                                onClick={() => {
                                  setisActive("");
                                }}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="feather feather-x">
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="content-block is-active">
                              {/* <img
                                src="assets/img/illustrations/cards/albums.svg"
                                alt=""
                              /> */}
                              <div class="help-text">
                                <h3>Manage your Calendar</h3>
                                <AddToCalendar
                                  event={calEvent}
                                  optionsOpen
                                  displayItemIcons
                                />
                              </div>
                            </div>

                            <div class="slide-dots">
                              <div class="dot is-active"></div>
                              <div class="dot"></div>
                            </div>
                            <div class="action">
                              <button
                                type="button"
                                class="button is-solid accent-button next-modal raised"
                                data-modal="albums-modal">
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="condition has-text-centered">
                    <span>Or</span>
                  </div>
                  <div className="subscribe-block">
                    <p>
                      Scan this QR code with your phone to automatically
                      register for this event.
                    </p>
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://dev.virtualcata.com/landing/7"
                      alt="QR Code"
                    />
                  </div>
                </div>
              </div>
              {/*Details*/}
              <div className="event-details">
                {/*Left Side*/}
                <div className="left">
                  <div className="details-block">
                    <h3>Event Details</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: eventDetails.Description,
                      }}
                    />
                  </div>
                  <div className="details-block">
                    <h3>Event Photos and Videos</h3>
                    <div className="video-block-wrapper">
                      <div
                        id="video-embed"
                        className="video-block-inner"
                        data-url="https://www.youtube.com/watch?v=Q_y1NVb4WP8">
                        <div className="video-overlay" />
                        <div className="playbutton">
                          <div className="icon-play">
                            <FiPlay />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="photo-group">
                      <a
                        href="https://via.placeholder.com/1600x900"
                        data-demo-href="assets/img/demo/unsplash/54.jpg"
                        data-fancybox
                        data-caption>
                        <img
                          src="https://via.placeholder.com/1600x900"
                          data-demo-src="assets/img/demo/unsplash/54.jpg"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://via.placeholder.com/1600x900"
                        data-demo-href="assets/img/demo/unsplash/7.jpg"
                        data-fancybox
                        data-caption>
                        <img
                          src="https://via.placeholder.com/1600x900"
                          data-demo-src="assets/img/demo/unsplash/7.jpg"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://via.placeholder.com/1600x900"
                        data-demo-href="assets/img/demo/unsplash/4.jpg"
                        data-fancybox
                        data-caption>
                        <img
                          src="https://via.placeholder.com/1600x900"
                          data-demo-src="assets/img/demo/unsplash/4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/*Right side*/}
                <div className="right">
                  <div className="event-owner mt-3">
                    <img
                      className="avatar"
                      src={eventDetails.PresenterDetails.PresenterLogo}
                      data-demo-src="assets/img/avatars/stella.jpg"
                      data-user-popover={2}
                      alt=""
                    />
                    <div className="meta">
                      <span>Event presenter</span>
                      <span>
                        {eventDetails
                          ? eventDetails.PresenterDetails.PresenterName
                          : null}
                      </span>
                    </div>
                  </div>
                  <div className="side-block">
                    <div className="side-head">
                      <span>Phone Number</span>
                    </div>
                    <div className="side-body">
                      <a>{eventDetails.HostDetails.HostPhone}</a>
                    </div>
                  </div>
                  <div className="side-block">
                    <div className="side-head">
                      <span>Email Address</span>
                    </div>
                    <div className="side-body">
                      <a>{eventDetails.HostDetails.HostEmail}</a>
                    </div>
                  </div>
                  <div className="side-block">
                    <div className="side-head">
                      <span>Website</span>
                    </div>
                    <div className="side-body">
                      <a
                        href={eventDetails.HostDetails.HostWeb}
                        target="_blank">
                        {eventDetails.HostDetails.HostWeb}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : loading ? (
        <i class="fa fa-spinner fa-spin" />
      ) : null}
    </div>
  );
}

export default EventLandingPage;
