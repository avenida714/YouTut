import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { likeATut } from '../../store/tuts';

// import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";


function Likes({tut}) {


  const userLoggedIn = useSelector((state) => state.session.user);

  const dispatch = useDispatch()

  const [isLikedByUser, setIsLikedByUser] = useState(false);



  const likeTut = (tut) => {
    console.log(tut);
    dispatch(likeATut(tut));
    // dispatch(getAllPosts());
    // await dispatch(getOnePostById(post.id));
    setIsLikedByUser(!isLikedByUser);
    const index = tut.likes.indexOf(userLoggedIn.id);
    if (!isLikedByUser) {
      tut.likes.push(userLoggedIn.id);
    } else {
      tut.likes.splice(index, 1);
    }
  };



  return (
    <div>
          <div className="likes padding sp-likes">
                {isLikedByUser ? (
                  <i
                    className="fa-solid fa-thumbs-up"
                    onClick={() => {
                      likeTut(tut);
                    }}
                  />
                ) : (
                  <i
                    className="fa-regular fa-thumbs-up"
                    onClick={() => {
                      likeTut(tut);
                    }}
                  />
                )}
                <div className="likes-count">
                  {" "}
                  {tut?.likes.length || "0"} likes{" "}
                </div>
              </div>
    </div>
  )
}

export default Likes
