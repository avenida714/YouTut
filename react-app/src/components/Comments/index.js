//Comments

import React from "react";

function Comments({ tut }) {
  let loopMe;
  console.log("TUT IN THE COMMENTS COMPONENT --------", tut)

  if (tut.comments) loopMe = true;
  else loopMe = false;

  return (
    loopMe && (
      <div>
        <div className="caption-comments">
          <div className="comment-display-watchTut">
            <div className="tut-caption-watchTut">{tut.caption}</div>
            {tut.comments.map((comment) => (
              <div className="comment_line" key={comment.id}>
                <div className="user-icon-watchTut-comment">
                  <img
                    alt="profile-pic"
                    className="img circle comment-img"
                    src={comment.user.profile_img}
                  />
                </div>

                <div className="bold">{comment.user.username}:</div>
                <div className="comment_content"> {comment.comment}</div>
                {/* <div className="comment_content">
                        {comment.user.id === currUser.id && (
                          <EditCommentModal
                            tut={tut}
                            comment1={comment.comment}
                            commentId={comment.id}
                            type={type}
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

export default Comments;
