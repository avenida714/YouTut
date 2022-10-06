//Comments

import React from "react";
import "./CommentFeed.css";
import CreateComment from "./CreateComment";





function CommentFeed({ tut }) {
  let loopMe;
  // console.log("COMMENTS IN THIS TUT --------", tut.comments)

  if (tut.comments) loopMe = true;
  else loopMe = false;

  let comments = Object.values(tut.comments)

  let chronologicalComments = comments.reverse()

  // console.log("chrono comments ***********", chronologicalComments)

  return (
    loopMe && (
      <div>
        <div className="caption-comments">
          <div className="comment-display-watchTut">
            {<div>
              <CreateComment tut={tut}/>
            </div>}

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

                {/* <div className="comment_content">
                        {comment.user.id === currUser.id && (
                          <EditComment
                            tut={tut}
                            oldComment={comment.comment}
                            commentId={comment.id}
                          />
                        )}
                      </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default CommentFeed;
