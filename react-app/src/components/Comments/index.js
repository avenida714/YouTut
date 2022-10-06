//Comments

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOneTutById } from "../../store/tuts";
import "./CommentFeed.css";
import CreateComment from "./CreateComment";





function CommentFeed({ tut }) {

  const dispatch = useDispatch()
  let loopMe;
  // console.log("COMMENTS IN THIS TUT --------", tut.comments)

  const [isLoaded, setIsLoaded] = useState(false)



  // console.log("chrono comments ***********", chronologicalComments)

    useEffect ( () => {

  if (tut.comments) setIsLoaded(true)

    dispatch(getOneTutById(tut.id))
  }, [dispatch, tut.comments, tut.id])

  let comments = Object.values(tut.comments)

  let chronologicalComments = comments.reverse()

  return (
    isLoaded && (
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
