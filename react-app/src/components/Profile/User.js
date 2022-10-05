import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UploadTut from '../Tuts/UploadTut';
import UserFeed from './UserFeed';

function User() {
  const [user, setUser] = useState({});
  let { userId }  = useParams();
  userId = Number(userId)
  const [isLoaded, setIsLoaded] = useState(false);

  const userLoggedInId = useSelector((state) => {
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
      if (userLoggedInId === userId) setThisIsMyPage(true)
      return
    })

  }, [userId, userLoggedInId]);

  if (!user) {
    return null;
  }

  console.log("THIS IS MY PAGE ?????????", thisIsMyPage)
  console.log("userLoggedInId", userLoggedInId)
  console.log("userId", userId)
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
    {/* {userLoggedIn && profile.id === sessionUser.id ? (
                            <button
                              className="editProfile"
                              onClick={(e) => handleEditProfile(e, profile.id)}
                            >
                              Edit profile <BiEditAlt />
                            </button>
                          ) : (
                            (
                              <button
                                style={hideButton}
                                className="editProfileButton"
                                onClick={(e) =>
                                  handleEditProfile(e, profile.id)
                                }
                              >
                                edit profile
                              </button>
                            ) && <ToggleFollow profile={profile} />
                          )}
    <UserFeed userId={userId}/> */}
    {iCanUpload}
    </div>
    )

  );
}
export default User;
