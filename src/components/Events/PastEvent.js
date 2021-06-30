import React from "react";
import NavBar from "../core/NavBar/NavBar";

function PastEvent() {
  const comments = [
    {
      author: 'Joey Tribbiani',
      time: '2 Days ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.',
      likes: 22,
      dislikes: 4
    },
    {
      author: 'Joey Tribbiani',
      time: '2 Days ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.',
      likes: 22,
      dislikes: 4
    },
    {
      author: 'Joey Tribbiani',
      time: '2 Days ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.',
      likes: 22,
      dislikes: 4
    },
    {
      author: 'Joey Tribbiani',
      time: '2 Days ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.',
      likes: 22,
      dislikes: 4
    },
    {
      author: 'Joey Tribbiani',
      time: '2 Days ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.',
      likes: 22,
      dislikes: 4
    },
  ]

  const suggestedVideos = [
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    {
      thumbnail : 'https://via.placeholder.com/120x90',
      brandThumbnail : 'https://via.placeholder.com/150x150',
      title: 'Wine Tasting by Whole Foods',
      hostName :'Whole Foods',
      attendeesCount : 120
    },
    
  ]

  const eventData = {
    title: 'Trade Winds Speciality',
    viewsCount: 1423,
    description: `Quis non odit sordidos, vanos, leves, futtiles? Vide, quantum,
                  inquam, fallare, Torquate. Duo Reges: constructio interrete.
                  Vestri haec verecundius, illi fortasse constantius. Si longus,
                  levis dictata sunt. Magna laus.`,
    author: 'Estebe Salgado',     
    brandThumbnail: 'https://via.placeholder.com/150x150',
    time: '3 days ago',
  }

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
          <div className=" player-wrapper">
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
                <div className="video-title">{eventData.title}</div>
                <div className="video-subtitle">
                  <div className="views-count">{eventData.viewsCount} views</div>
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
                    src={eventData.brandThumbnail}
                    data-demo-src="https://yt3.ggpht.com/a/AATXAJwGpWL7g1YRC4p5kDEJRyaCDSGCk5u48UqmUqN_sw=s88-c-k-c0xffffffff-no-rj-mo"
                    alt=""
                  />
                  <div className="meta">
                    <span>{eventData.author}</span>
                    <span>{eventData.time}</span>
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
                    </a>{" "}
                    Non potes, nisi retexueris illa.
                    <a
                      className="standard-link"
                      href="http://loripsum.net/"
                      target="_blank">
                      Sed fortuna fortis;
                    </a>{" "}
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
                {
                  comments.map(item => (
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
                            <a>{item.author}</a> <small> · {item.time}</small>
                          </h4>
                          <p>
                            {item.commentText}
                          </p>
                        </div>
                        <div className="comment-stats-wrap">
                          <div className="comment-stats">
                            <div className="stat is-likes">
                              <i data-feather="thumbs-up" />
                              <span>{item.likes}</span>
                            </div>
                            <div className="stat is-dislikes">
                              <i data-feather="thumbs-down" />
                              <span>{item.dislikes}</span>
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
                  ))
                }              
              </div>
            </div>
            <div className="related-side">
              <div className="meta-box related-list">
                <div className="autoplay">
                  <h4 className="autoplay-title">Up next</h4>
                  <div className="autoplay-toggle">
                    <span>Autoplay</span>
                    <label className="f-switch is-primary">
                      <input
                        type="checkbox"
                        className="is-switch"
                        defaultChecked
                      />
                      <i />
                    </label>
                    <div className="close-related-videos">
                      <i data-feather="x" />
                    </div>
                  </div>
                </div>
                {/* Related Video */}
                <div className="media related-card">
                  <div className="media-left">
                    <a className="image">
                      <img
                        src="https://via.placeholder.com/120x90"
                        data-demo-src="assets/img/demo/video/home/collections/c17.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="media-content">
                    <div className="video-meta">
                      <a className="related-title">The Old Caban</a>
                      <div className="submeta">
                        <img
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/logos/metamovies.svg"
                          data-page-popover={2}
                          alt=""
                        />
                        <div className="info">
                          <span className="video-account">Meta Movies</span>
                          <span className="video-views">139K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-label">
                  <h4 className="related-title">Suggested</h4>
                </div>
                {/* Related Video */}
                {
                  suggestedVideos.map(item => (
                    <div className="media related-card">
                      <div className="media-left">
                        <a className="image">
                          <img
                            src={item.thumbnail}
                            data-demo-src="assets/img/demo/video/home/collections/c18.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="media-content">
                        <div className="video-meta">
                          <a className="related-title">{item.title}</a>
                          <div className="submeta">
                            <img
                              src={item.brandThumbnail}
                              data-demo-src="assets/img/icons/logos/metamovies.svg"
                              data-page-popover={2}
                              alt=""
                            />
                            <div className="info">
                              <span className="video-account">{item.hostName}</span>
                              <span className="video-views">{item.attendeesCount}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEvent;
