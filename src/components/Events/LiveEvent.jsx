import React from "react";
import NavBar from "../core/NavBar/NavBar"

function LiveEvent() {
  const comments = [
    {
      authorProfilePicture: 'https://via.placeholder.com/150x150',
      authorName: 'John Doe',
      time: '4 hours ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Murenam te accusante defenderem.',
      likesCount: 17,
      dislikesCount: 4
    },
    {
      authorProfilePicture: 'https://via.placeholder.com/150x150',
      authorName: 'John Doe',
      time: '4 hours ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Murenam te accusante defenderem.',
      likesCount: 17,
      dislikesCount: 4
    },
    {
      authorProfilePicture: 'https://via.placeholder.com/150x150',
      authorName: 'John Doe',
      time: '4 hours ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Murenam te accusante defenderem.',
      likesCount: 17,
      dislikesCount: 4
    },
    {
      authorProfilePicture: 'https://via.placeholder.com/150x150',
      authorName: 'John Doe',
      time: '4 hours ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Murenam te accusante defenderem.',
      likesCount: 17,
      dislikesCount: 4
    },
    {
      authorProfilePicture: 'https://via.placeholder.com/150x150',
      authorName: 'John Doe',
      time: '4 hours ago',
      commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Murenam te accusante defenderem.',
      likesCount: 17,
      dislikesCount: 4
    },
  ]

  const event = {
    location: '123 Gilmore Street, Loise Lane, CA',
    viewsCount: 244,
    followersCount: 1599,
    coverPicture: 'https://via.placeholder.com/1600x460',
    title: 'Wine tasting with Estebe',
    dateTime: 'Saturday, Jul 21 2021 @ 5:00 PM - 11:00 PM',
    phoneNumber: '+(1) 555-888-1265',
    emailAddress: 'something@something.com',
    presenter: 'Presenter Name',
    website: 'https://www.something.com',
    eventDetails: `<p>
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
                  </p>`,
    
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
                <div className="video-title">{event.title}</div>
                <div className="video-subtitle">
                  <div className="views-count">{event.viewsCount} views</div>
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
                    <span>{event.presenter}</span>
                    <span>{event.dateTime}</span>
                  </div>
                  <a className="button">Follow {event.followersCount}</a>
                </div>
              </div>
              <div className="meta-box video-description">
                <h4>Description</h4>
                <div dangerouslySetInnerHTML={{ __html: event.eventDetails  }} />
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
                  <h3>Comments ({comments.length})</h3>
                </div>
                {
                  comments.map((item) => (
                  <div className="media is-comment">
                    <figure className="media-left">
                      <div className="avatar-wrap is-smaller">
                        <img
                          src={item.authorProfilePicture}
                          data-demo-src="assets/img/avatars/milly.jpg"
                          data-user-popover={7}
                          alt=""
                        />
                      </div>
                    </figure>
                    <div className="media-content">
                      <div className="comment-meta">
                        <h4>
                          <a>{item.authorName}</a> <small> · {item.time}</small>
                        </h4>
                        <p>
                          {item.commentText}
                        </p>
                      </div>
                      <div className="comment-stats-wrap">
                        <div className="comment-stats">
                          <div className="stat is-likes">
                            <i data-feather="thumbs-up" />
                            <span>{item.likesCount}</span>
                          </div>
                          <div className="stat is-dislikes">
                            <i data-feather="thumbs-down" />
                            <span>{item.dislikesCount}</span>
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
              <div className="meta-box related-list">{/* Chat End */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveEvent;
