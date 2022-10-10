import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import UploadTut from '../Tuts/UploadTut';
import UserFeed from './UserFeed';

import "./UserAndFeed.css"

function User() {
  const [user, setUser] = useState({});
  let { userId }  = useParams();
  userId = Number(userId)
  const [isLoaded, setIsLoaded] = useState(false);
  const [notPressed, setNotPressed] = useState(true)
  const history = useHistory()

  const userLoggedInId = useSelector((state) => {
    return state.session.user.id;
  })

  const [thisIsMyPage, setThisIsMyPage] = useState(false)



  useEffect(() => {
    // console.log("user user user", user)
    // if (userId === undefined) history.push('/')
    if (!userId) {
      history.push('/');
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      if(response.ok) {
        const user = await response.json();
        setUser(user);
      } else {
        history.push('/');
      }
    })()
    .then(() => setIsLoaded(true))
    .then(() => {
      if (userLoggedInId === userId) setThisIsMyPage(true)
      if (history.action === 'POP') {
        setNotPressed(false)
      }
      return
    })

  }, [userId, userLoggedInId, history.action]);

  if (!user) {
    return null;
  }




  // console.log("THIS IS MY PAGE ?????????", thisIsMyPage)
  // console.log("userLoggedInId", userLoggedInId)
  // console.log("userId", userId)

   const iCanUpload = (<div className="share-tut">
      <p>HAVE A TUT TO SHARE? UPLOAD BELOW!</p>
      <UploadTut />
      </div>)









  return (
    isLoaded && (
    <div>
      <div>
        <img alt="profile" className='profile-pic-user' src={user.profile_img} />
      </div>
      <div className='profile-text-wrapper'>
      <div className='profile-user-name'>
        {user.username}
      </div>
      <div className='profile-user-about'>
        {user.about}
      </div>

      </div>

    {notPressed && thisIsMyPage && iCanUpload}
    <UserFeed className="user-feed" userId={userId}/>
    </div>
    )

  );
}
export default User;
