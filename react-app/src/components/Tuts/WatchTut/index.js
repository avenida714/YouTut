//WatchTut

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getTutComments } from "../../../store/comments";

import { getAllTutsOnYouTut, getOneTutById } from "../../../store/tuts";
import CommentFeed from "../../Comments";
import Likes from "../../Likes";
import MainFeed from "../../MainFeed";
import DeleteTut from "../DeleteTut";
import EditTut from "../EditTut";

import "./WatchTut.css";

function WatchTut() {
  const history = useHistory();

  const tutId = useParams().tutId;
  // if (!tutId) history.push("/")

  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const userLoggedIn = useSelector((state) => {
    return state.session.user;
  });

  useEffect(() => {
    dispatch(getAllTutsOnYouTut());
    if (tut === undefined) history.push("/");

    dispatch(getOneTutById(tutId))
      // .then(() => dispatch(getTutComments(tutId))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  const tut = useSelector((state) => state.tuts[tutId]);

  const usersProfilePage = () => {
    let path = `/users/${tut.user_id}`;
    history.push(path);
  };

  return (
    isLoaded &&
    tut && (
      <div className="outer-wrapper-watchTut">
        <div className="tut-and-block">
          <div className="watch-tut-player">
            <ReactPlayer
              url={tut.tut_video}
              controls
              width="100%"
              height="100%"
            />
          </div>
          <div className="title-likes-dislikes-WatchTut">
            <div className="tut-title-WatchTut">{tut.tut_title}</div>
          </div>
          <div className="profile-user-about-outer-WatchTut">
            <div
              className="profile-pic-div-WatchTut"
              onClick={usersProfilePage}
            >
              <img
                className="profile-pic-WatchTut"
                src={tut.user.profile_img}
                alt="profile-thumbnail-WatchTut"
              />
            </div>
            <div className="Username-WatchTut">
              <div className="tut-username-WatchTut">{tut.user.username}</div>
              <div className="likes-div">
                <Likes tut={tut} />
              </div>
            </div>
          </div>
          <div className="tut-about-WatchTut">{tut.tut_description}</div>

          <div className="comments-div">
            <CommentFeed tut={tut} />
          </div>
        </div>
        <div className="mini-tut-card-feed">
          <MainFeed />
        </div>
      </div>
    )
  );
}

export default WatchTut;
