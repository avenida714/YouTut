//Comments

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTutComments } from "../../store/comments";
import { getOneTutById } from "../../store/tuts";
import "./CommentFeed.css";
import CreateComment from "./CreateComment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

function CommentFeed({ tut }) {
  const dispatch = useDispatch();
  const history = useHistory();

  let loopMe;
  // console.log("COMMENTS IN THIS TUT --------", tut.comments)

  const [isLoaded, setIsLoaded] = useState(false);

  const [editEngaged, setEditEngaged] = useState(false);
  const [editingThisComment, setEditingThiscomment] = useState('')

  const userLoggedIn = useSelector((state) => state.session.user);

  // console.log("chrono comments ***********", chronologicalComments)

  const editClick = function(id) {
    setEditEngaged(!editEngaged)
    let commentId = id;

    console.log('THIS IS THE COMMENT ID AFTER EDIT CLICK', commentId)

    setEditingThiscomment(commentId)

  }

  // const editButton = (<button onClick={() => editClick()}>
  //   <i className="fa-solid fa-pen-to-square"></i>
  // </button>)

  useEffect(() => {
    dispatch(getTutComments(tut.id)).then(() => {
      dispatch(getOneTutById(tut.id)).then(() => setIsLoaded(true));
    });
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
                <div
                  className="user-icon-watchTut-comment"
                  onClick={() => {
                    let path = `/users/${comment.user_id}`;
                    history.push(path);
                  }}
                >
                  <img
                    alt="profile-pic"
                    className="left-side-comment"
                    src={comment.user.profile_img}
                  />
                </div>
                <div className="right-side-comment">
                  <div className="user-name" onClick={() => {
                    let path = `/users/${comment.user_id}`;
                    history.push(path);
                  }}>{comment.user.username}</div>

                  <div className="comment-content"> {comment.comment}</div>
                </div>

                <div>
                  {comment.user.id === userLoggedIn.id ? <button onClick={() => editClick(comment.id)}>
    <i className="fa-solid fa-pen-to-square"></i>
  </button> : null}
                </div>

                <div className="comment-content-test-edit">
                  {editEngaged && comment.user.id === userLoggedIn.id && editingThisComment === comment.id &&(
                    <div className="comment-content-test-edit" >
                      <EditComment
                        tut={tut}
                        oldComment={comment.comment}
                        commentId={comment.id}
                      />
                      <DeleteComment commentId={comment.id} tutId={tut.id} />
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
