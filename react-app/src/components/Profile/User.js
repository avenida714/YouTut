import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UploadTut from '../Tuts/UploadTut';
import UserFeed from './UserFeed';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const userLoggedIn = useSelector((state) => {
    return state.session.user.id;
  })

  const [thisIsMyPage, setThisIsMyPage] = useState(false)



  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })()
    .then(() => setIsLoaded(true))
    .then(() => {
      if (userLoggedIn === userId) setThisIsMyPage(true)
    })

  }, [userId, userLoggedIn]);

  if (!user) {
    return null;
  }

  console.log("THIS IS MY PAGE ?????????", thisIsMyPage)
  let iCanUpload;
  if (thisIsMyPage) {
    iCanUpload = (<UploadTut />)
  } else {
    iCanUpload = null
  }





  return (
    isLoaded && (
    <div>
      <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
    <UserFeed userId={userId}/>
    {iCanUpload}
    </div>
    )

  );
}
export default User;
