import React from "react";
import NavBar from "../core/NavBar";

function LiveEvent() {
  return (
    <div>
      <NavBar />
      <div className="view-wrapper is-full">
        <div className="videos-wrapper has-player">
          {/* /html/partials/pages/videos/videos-sidebar.html */}
          <div className="videos-sidebar is-active">
            <div className="videos-sidebar-inner">
              <div className="user-block">
                <a className="close-videos-sidebar">
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
                <h4>Whole Foods</h4>
                <p>Melbourne, AU</p>
                <div className="user-stats">
                  <div className="stat-block">
                    <span>Videos</span>
                    <span>49</span>
                  </div>
                  <div className="stat-block">
                    <span>Followers</span>
                    <span>2.3K</span>
                  </div>
                </div>
              </div>
              <div className="user-menu">
                <div className="user-menu-inner has-slimscroll">
                  <div className="menu-block">
                    <ul>
                      <li className="is-active">
                        <a>
                          <i data-feather="smile" />
                          <span>Upcoming</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i data-feather="youtube" />
                          <span>Live Events</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i data-feather="cast" />
                          <span>Past Events</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="separator" />
                </div>
              </div>
            </div>
          </div>
          <div className="player-wrapper">
            <div className="video-side">
              <div className="image">
                <div className="plyr__video-embed" id="player">
                  <iframe
                    src="https://www.youtube.com/embed/-qbVcvO7eks?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                    allowFullScreen
                    allow="autoplay"
                  />
                </div>
              </div>
              <div className="meta-box video-meta">
                <div className="video-title">Trade Winds Speciality</div>
                <div className="video-subtitle">
                  <div className="views-count">457 223 views</div>
                  <div className="quick-actions">
                    <a className="quick-action">
                      <i data-feather="thumbs-up" />
                    </a>
                    <a className="quick-action">
                      <i data-feather="thumbs-down" />
                    </a>
                    <a className="quick-action">
                      <i data-feather="share-2" />
                    </a>
                    <a className="quick-action">
                      <i data-feather="save" />
                    </a>
                    <a className="quick-action">
                      <i data-feather="cast" />
                    </a>
                    <a className="quick-action is-mobile related-trigger">
                      <i data-feather="more-vertical" />
                    </a>
                  </div>
                </div>
                <div className="video-owner">
                  <img
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="https://yt3.ggpht.com/a/AATXAJwGpWL7g1YRC4p5kDEJRyaCDSGCk5u48UqmUqN_sw=s88-c-k-c0xffffffff-no-rj-mo"
                    alt=""
                  />
                  <div className="meta">
                    <span>Estebe Salgado</span>
                    <span>Uploaded 10 days ago</span>
                  </div>
                  <a className="button">Follow 1.52M</a>
                </div>
              </div>
              <div className="meta-box video-description">
                <h4>Description</h4>
                <p>
                  Quis non odit sordidos, vanos, leves, futtiles? Vide, quantum,
                  inquam, fallare, Torquate. Duo Reges: constructio interrete.
                  Vestri haec verecundius, illi fortasse constantius. Si longus,
                  levis dictata sunt. Magna laus.
                </p>
                <div className="additional-description content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Murenam te accusante defenderem. Apud ceteros autem
                    philosophos, qui quaesivit aliquid, tacet;
                  </p>
                  <p>
                    <a
                      className="standard-link"
                      href="http://loripsum.net/"
                      target="_blank">
                      Qui est in parvis malis.
                    </a>
                    Non potes, nisi retexueris illa.
                    <a
                      className="standard-link"
                      href="http://loripsum.net/"
                      target="_blank">
                      Sed fortuna fortis;
                    </a>
                    Duo Reges: constructio interrete.
                    <a
                      className="standard-link"
                      href="http://loripsum.net/"
                      target="_blank">
                      Primum divisit ineleganter;
                    </a>
                  </p>
                  <ul>
                    <li>
                      Quid, si non sensus modo ei sit datus, verum etiam animus
                      hominis?
                    </li>
                    <li>
                      Re mihi non aeque satisfacit, et quidem locis pluribus.
                    </li>
                    <li>
                      Ergo opifex plus sibi proponet ad formarum quam civis
                      excellens ad factorum pulchritudinem?
                    </li>
                    <li>
                      Animadverti, ínquam, te isto modo paulo ante ponere, et
                      scio ab Antiocho nostro dici sic solere;
                    </li>
                  </ul>
                  <p>
                    Sed residamus, inquit, si placet. Dici enim nihil potest
                    verius. Ita relinquet duas, de quibus etiam atque etiam
                    consideret. Haec para/doca illi, nos admirabilia dicamus.
                    Nescio quo modo praetervolavit oratio. Ut pulsi recurrant? A
                    mene tu? Summus dolor plures dies manere non potest?
                  </p>
                </div>
                <hr />
                <a
                  id="description-show-more"
                  className="has-text-centered video-description-more">
                  Show More
                </a>
              </div>
              <div className="comments-wrap">
                <div className="media comment-box">
                  <div className="media-left">
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
                  </div>
                  <div className="media-content">
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Add a comment..."
                        rows={4}
                        defaultValue={""}
                      />
                      <a className="button">Post Comment</a>
                    </div>
                  </div>
                </div>
                <div className="comments-count">
                  <h3>Comments (9)</h3>
                </div>
                <div className="media is-comment">
                  <div className="media-left">
                    <div className="avatar-wrap is-smaller">
                      <img
                        src="https://via.placeholder.com/150x150"
                        data-demo-src="assets/img/avatars/dan.jpg"
                        data-user-popover={1}
                        alt=""
                      />
                      <div className="badge">
                        <i data-feather="check" />
                      </div>
                    </div>
                  </div>
                  <div className="media-content">
                    <div className="comment-meta">
                      <h4>
                        <a>Dan Walker</a> <small> · 3 hours ago</small>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis porta eros lacus, nec ultricies elit blandit non.
                        Suspendisse pellentesque mauris sit amet dolor blandit
                        rutrum. Nunc in tempus turpis.
                      </p>
                    </div>
                    <div className="comment-stats-wrap">
                      <div className="comment-stats">
                        <div className="stat is-likes">
                          <i data-feather="thumbs-up" />
                          <span>23</span>
                        </div>
                        <div className="stat is-dislikes">
                          <i data-feather="thumbs-down" />
                          <span>3</span>
                        </div>
                      </div>
                      <div className="comment-actions">
                        <a className="comment-action is-like">
                          <i data-feather="thumbs-up" />
                        </a>
                        <a className="comment-action is-dislike">
                          <i data-feather="thumbs-down" />
                        </a>
                        <a className="comment-action is-reply">
                          <i data-feather="message-circle" />
                        </a>
                      </div>
                    </div>
                    <div className="nested-replies">
                      <a className="header">
                        <span>5 Replies</span>
                        <i data-feather="chevron-down" />
                      </a>
                      <div className="nested-comments">
                        {/*Nested comment */}
                        <div className="media is-comment is-nested">
                          <figure className="media-left">
                            <div className="avatar-wrap is-smaller">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/gaelle.jpeg"
                                data-user-popover={11}
                                alt=""
                              />
                            </div>
                          </figure>
                          <div className="media-content">
                            <div className="comment-meta">
                              <h4>
                                <a>Gaelle Morris</a>
                                <small> · 30 minutes ago</small>
                              </h4>
                              <p>
                                <span className="mention">@Dan Walker</span>{" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis porta eros lacus, nec
                                ultricies elit blandit non. Suspendisse
                                pellentesque mauris sit amet dolor blandit
                                rutrum. Nunc in tempus turpis.
                              </p>
                            </div>
                            <div className="comment-stats-wrap">
                              <div className="comment-stats">
                                <div className="stat is-likes">
                                  <i data-feather="thumbs-up" />
                                  <span>2</span>
                                </div>
                                <div className="stat is-dislikes">
                                  <i data-feather="thumbs-down" />
                                  <span>0</span>
                                </div>
                              </div>
                              <div className="comment-actions">
                                <a className="comment-action is-like">
                                  <i data-feather="thumbs-up" />
                                </a>
                                <a className="comment-action is-dislike">
                                  <i data-feather="thumbs-down" />
                                </a>
                                <a className="comment-action is-reply">
                                  <i data-feather="message-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Nested comment */}
                        <div className="media is-comment is-nested">
                          <figure className="media-left">
                            <div className="avatar-wrap is-smaller">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/rolf.jpg"
                                data-user-popover={13}
                                alt=""
                              />
                              <div className="badge">
                                <i data-feather="check" />
                              </div>
                            </div>
                          </figure>
                          <div className="media-content">
                            <div className="comment-meta">
                              <h4>
                                <a>Rolf Krupp</a>{" "}
                                <small> · 50 minutes ago</small>
                              </h4>
                              <p>
                                <span className="mention">@Gaelle Morris</span>{" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis porta eros lacus, nec
                                ultricies elit blandit non.
                              </p>
                            </div>
                            <div className="comment-stats-wrap">
                              <div className="comment-stats">
                                <div className="stat is-likes">
                                  <i data-feather="thumbs-up" />
                                  <span>1</span>
                                </div>
                                <div className="stat is-dislikes">
                                  <i data-feather="thumbs-down" />
                                  <span>0</span>
                                </div>
                              </div>
                              <div className="comment-actions">
                                <a className="comment-action is-like">
                                  <i data-feather="thumbs-up" />
                                </a>
                                <a className="comment-action is-dislike">
                                  <i data-feather="thumbs-down" />
                                </a>
                                <a className="comment-action is-reply">
                                  <i data-feather="message-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Nested comment */}
                        <div className="media is-comment is-nested">
                          <figure className="media-left">
                            <div className="avatar-wrap is-smaller">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/bobby.jpg"
                                data-user-popover={8}
                                alt=""
                              />
                            </div>
                          </figure>
                          <div className="media-content">
                            <div className="comment-meta">
                              <h4>
                                <a>Bobby Brown</a> <small> · 1 hour ago</small>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                            <div className="comment-stats-wrap">
                              <div className="comment-stats">
                                <div className="stat is-likes">
                                  <i data-feather="thumbs-up" />
                                  <span>5</span>
                                </div>
                                <div className="stat is-dislikes">
                                  <i data-feather="thumbs-down" />
                                  <span>1</span>
                                </div>
                              </div>
                              <div className="comment-actions">
                                <a className="comment-action is-like">
                                  <i data-feather="thumbs-up" />
                                </a>
                                <a className="comment-action is-dislike">
                                  <i data-feather="thumbs-down" />
                                </a>
                                <a className="comment-action is-reply">
                                  <i data-feather="message-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Nested comment */}
                        <div className="media is-comment is-nested">
                          <figure className="media-left">
                            <div className="avatar-wrap is-smaller">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/stella.jpg"
                                data-user-popover={2}
                                alt=""
                              />
                            </div>
                          </figure>
                          <div className="media-content">
                            <div className="comment-meta">
                              <h4>
                                <a>Stella Bergmann</a>
                                <small> · 2 hours ago</small>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis porta eros lacus, nec
                                ultricies elit blandit non.
                              </p>
                            </div>
                            <div className="comment-stats-wrap">
                              <div className="comment-stats">
                                <div className="stat is-likes">
                                  <i data-feather="thumbs-up" />
                                  <span>0</span>
                                </div>
                                <div className="stat is-dislikes">
                                  <i data-feather="thumbs-down" />
                                  <span>0</span>
                                </div>
                              </div>
                              <div className="comment-actions">
                                <a className="comment-action is-like">
                                  <i data-feather="thumbs-up" />
                                </a>
                                <a className="comment-action is-dislike">
                                  <i data-feather="thumbs-down" />
                                </a>
                                <a className="comment-action is-reply">
                                  <i data-feather="message-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Nested comment */}
                        <div className="media is-comment is-nested">
                          <figure className="media-left">
                            <div className="avatar-wrap is-smaller">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/edward.jpeg"
                                data-user-popover={5}
                                alt=""
                              />
                            </div>
                          </figure>
                          <div className="media-content">
                            <div className="comment-meta">
                              <h4>
                                <a>Edward Mayers</a>{" "}
                                <small> · 3 hours ago</small>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis porta eros lacus, nec
                                ultricies elit blandit non.
                              </p>
                            </div>
                            <div className="comment-stats-wrap">
                              <div className="comment-stats">
                                <div className="stat is-likes">
                                  <i data-feather="thumbs-up" />
                                  <span>6</span>
                                </div>
                                <div className="stat is-dislikes">
                                  <i data-feather="thumbs-down" />
                                  <span>0</span>
                                </div>
                              </div>
                              <div className="comment-actions">
                                <a className="comment-action is-like">
                                  <i data-feather="thumbs-up" />
                                </a>
                                <a className="comment-action is-dislike">
                                  <i data-feather="thumbs-down" />
                                </a>
                                <a className="comment-action is-reply">
                                  <i data-feather="message-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comment */}
                <div className="media is-comment">
                  <figure className="media-left">
                    <div className="avatar-wrap is-smaller">
                      <img
                        src="https://via.placeholder.com/150x150"
                        data-demo-src="assets/img/avatars/milly.jpg"
                        data-user-popover={7}
                        alt=""
                      />
                    </div>
                  </figure>
                  <div className="media-content">
                    <div className="comment-meta">
                      <h4>
                        <a>Milly Augutine</a> <small> · 4 hours ago</small>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className="comment-stats-wrap">
                      <div className="comment-stats">
                        <div className="stat is-likes">
                          <i data-feather="thumbs-up" />
                          <span>8</span>
                        </div>
                        <div className="stat is-dislikes">
                          <i data-feather="thumbs-down" />
                          <span>0</span>
                        </div>
                      </div>
                      <div className="comment-actions">
                        <a className="comment-action is-like">
                          <i data-feather="thumbs-up" />
                        </a>
                        <a className="comment-action is-dislike">
                          <i data-feather="thumbs-down" />
                        </a>
                        <a className="comment-action is-reply">
                          <i data-feather="message-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media is-comment">
                  <figure className="media-left">
                    <div className="avatar-wrap is-smaller">
                      <img
                        src="https://via.placeholder.com/150x150"
                        data-demo-src="assets/img/avatars/elise.jpg"
                        data-user-popover={6}
                        alt=""
                      />
                    </div>
                  </figure>
                  <div className="media-content">
                    <div className="comment-meta">
                      <h4>
                        <a>Elise Walker</a> <small> · 5 hours ago</small>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis porta eros lacus, nec ultricies elit blandit non.
                      </p>
                    </div>
                    <div className="comment-stats-wrap">
                      <div className="comment-stats">
                        <div className="stat is-likes">
                          <i data-feather="thumbs-up" />
                          <span>3</span>
                        </div>
                        <div className="stat is-dislikes">
                          <i data-feather="thumbs-down" />
                          <span>0</span>
                        </div>
                      </div>
                      <div className="comment-actions">
                        <a className="comment-action is-like">
                          <i data-feather="thumbs-up" />
                        </a>
                        <a className="comment-action is-dislike">
                          <i data-feather="thumbs-down" />
                        </a>
                        <a className="comment-action is-reply">
                          <i data-feather="message-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media is-comment">
                  <figure className="media-left">
                    <div className="avatar-wrap is-smaller">
                      <img
                        src="https://via.placeholder.com/150x150"
                        data-demo-src="assets/img/avatars/placeholder-m.jpg"
                        alt=""
                      />
                    </div>
                  </figure>
                  <div className="media-content">
                    <div className="comment-meta">
                      <h4>
                        <a>John Doe</a> <small> · 5 hours ago</small>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis porta eros lacus, nec ultricies elit blandit non.
                      </p>
                    </div>
                    <div className="comment-stats-wrap">
                      <div className="comment-stats">
                        <div className="stat is-likes">
                          <i data-feather="thumbs-up" />
                          <span>12</span>
                        </div>
                        <div className="stat is-dislikes">
                          <i data-feather="thumbs-down" />
                          <span>4</span>
                        </div>
                      </div>
                      <div className="comment-actions">
                        <a className="comment-action is-like">
                          <i data-feather="thumbs-up" />
                        </a>
                        <a className="comment-action is-dislike">
                          <i data-feather="thumbs-down" />
                        </a>
                        <a className="comment-action is-reply">
                          <i data-feather="message-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="related-side">
              <div className="meta-box related-list">{/* Chat End */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveEvent;
