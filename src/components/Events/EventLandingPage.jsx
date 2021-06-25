import React from "react";
import NavBar from "../core/NavBar";

function EventLandingPage() {
  return (
    <div>
      <NavBar />
      <div className="view-wrapper is-full">
        {/*Wrapper*/}
        <div className="event-page-wrapper">
          {/*Cover*/}
          <div className="event-cover">
            <img
              className="cover-image"
              src="https://via.placeholder.com/1600x460"
              data-demo-src="assets/img/demo/unsplash/55.jpg"
              alt=""
            />
          </div>
          {/*Main infos*/}
          <div className="event-content">
            <div className="event-head">
              <div className="left">
                <h2>Wine tasting with Estebe</h2>
                <h3>Saturday, Jul 21 2021 @ 5:00 PM - 11:00 PM</h3>
                <div className="button-separator">
                  <i data-feather="chevron-right" />
                </div>
                <div className="info-block">
                  <div className="info-head">
                    <div className="event-icon">
                      <i data-feather="calendar" />
                    </div>
                    <span>Host</span>
                  </div>
                  <div className="info-body">
                    <p>Whole Foods, CA</p>
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-head">
                    <div className="event-icon">
                      <i data-feather="map-pin" />
                    </div>
                    <span>Location (Live from)</span>
                  </div>
                  <div className="info-body">
                    <a>123 Gilmore Street, Lois Lane, CA</a>
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-head">
                    <div className="event-icon">
                      <i data-feather="share-2" />
                    </div>
                    <span>Share</span>
                  </div>
                  <div className="info-body">
                    <div className="socials">
                      <a>
                        <i data-feather="facebook" />
                      </a>
                      <a>
                        <i data-feather="twitter" />
                      </a>
                      <a>
                        <i data-feather="linkedin" />
                      </a>
                      <a>
                        <i data-feather="instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <h2>Subscribe Now</h2>
                <div className="subscribe-block">
                  <p>Add this event to your calendar</p>
                  <button className="button is-solid primary-button raised">
                    Add To Calendar
                  </button>
                </div>
                <div className="condition has-text-centered">
                  <span>Or</span>
                </div>
                <div className="subscribe-block">
                  <p>
                    Scan this QR code with your phone to automatically register
                    for this event.
                  </p>
                  <img
                    src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/f/6/2/f621f61ff6_50038379_codeqr-futura.jpg"
                    alt=""
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                    id fugiunt, re eadem defendunt, quae Peripatetici, verba.
                    Scisse enim te quis coarguere possit? Quid de Platone aut de
                    Democrito loquar.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                    id fugiunt, re eadem defendunt, quae Peripatetici, verba.
                    Scisse enim te quis coarguere possit? Quid de Platone aut de
                    Democrito loquar? Duo Reges: constructio interrete. Quod
                    equidem non reprehendo; Bonum integritas corporis.
                  </p>
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
                          <i data-feather="play" />
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
                <div className="event-owner">
                  <img
                    className="avatar"
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/avatars/stella.jpg"
                    data-user-popover={2}
                    alt=""
                  />
                  <div className="meta">
                    <span>Event presenter</span>
                    <span>Trade Winds Speciality</span>
                  </div>
                </div>
                <div className="side-block">
                  <div className="side-head">
                    <span>Phone Number</span>
                  </div>
                  <div className="side-body">
                    <a>+(1) 555-888-1265</a>
                  </div>
                </div>
                <div className="side-block">
                  <div className="side-head">
                    <span>Email Address</span>
                  </div>
                  <div className="side-body">
                    <a>estebe@tradewindsspeciality.com</a>
                  </div>
                </div>
                <div className="side-block">
                  <div className="side-head">
                    <span>Website</span>
                  </div>
                  <div className="side-body">
                    <a
                      href="https://www.tradewindsspecialty.com"
                      target="_blank">
                      https://www.tradewindsspecialty.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventLandingPage;
