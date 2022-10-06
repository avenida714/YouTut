//Comments

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTutComments } from "../../store/comments";
import { getOneTutById } from "../../store/tuts";
import "./CommentFeed.css";
import CreateComment from "./CreateComment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

function CommentFeed({ tut }) {
  const dispatch = useDispatch();
  let loopMe;
  // console.log("COMMENTS IN THIS TUT --------", tut.comments)

  const [isLoaded, setIsLoaded] = useState(false);

  const userLoggedIn = useSelector((state) => state.session.user);

  // console.log("chrono comments ***********", chronologicalComments)

  useEffect(() => {
    dispatch(getTutComments(tut.id))
    .then(() => {
    dispatch(getOneTutById(tut.id))
    .then(() => setIsLoaded(true)
    )
    })


  }, [dispatch]);

  let comments = Object.values(tut.comments);

  let chronologicalComments = comments.reverse();

  return (
    isLoaded && (
      <div>
        <div className="caption-comments">
          <div className="comment-display-watchTut">
            {
              <div>
                <CreateComment tut={tut} />
              </div>
            }

            {chronologicalComments.map((comment) => (
              <div className="comment_line" key={comment.id}>
                <div className="user-icon-watchTut-comment">
                  <img
                    alt="profile-pic"
                    className="left-side-comment"
                    src={comment.user.profile_img}
                  />
                </div>
                <div className="right-side-comment">
                  <div className="user-name">{comment.user.username}</div>
                  <div className="comment-content"> {comment.comment}</div>
                </div>

                <div className="comment_content">
                  {comment.user.id === userLoggedIn.id && (
                    <div>
                      <EditComment
                        tut={tut}
                        oldComment={comment.comment}
                        commentId={comment.id}
                      />
                      <DeleteComment commentId={comment.id} tutId={tut.id}/>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default CommentFeed;
