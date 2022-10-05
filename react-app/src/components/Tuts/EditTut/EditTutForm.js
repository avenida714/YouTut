//EditTutForm

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editTut } from "../../../store/tuts";

function EditTutForm({ tut, tutId, oldTitle, oldDescription }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);

  const [imageLoading, setImageLoading] = useState(false);

  //inputs for backend
  const [title, setTitle] = useState(oldTitle); //tut_title
  const [mp4, setMp4] = useState(tut.tut_video); //tut_video
  const [description, setDescription] = useState(oldDescription); //tut_description
  const [thumbnail, setThumbnail] = useState(tut.thumbnail_pic); //thumbnail_pic

  const [userHasSubmitted, setUserHasSubmitted] = useState(false);


  useEffect(() => {
    let errors = [];


    if (title.length <= 0 || title.length > 50) {
      errors.push("Please provide a title no longer than 50 characters.");
    }

    if (description.length <= 0) {
      errors.push("Please provide a short description of your Tut.");
    }

    // if (!image_url?.includes("jpg") &&) {
    //   errors.push("Please use jpg, jpeg or png");
    // }


    setErrors(errors);
  }, [title, description]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUserHasSubmitted(true)

    if (errors.length > 0) {
      return alert("Cannot Submit");
    }

    const formData = new FormData();

    console.log("this is the form data before the appends", formData)

    formData.append("tut_title", title);
    formData.append("tut_video", mp4);
    formData.append("tut_description", description);
    formData.append("thumbnail_pic", thumbnail);

    setImageLoading(true);

    console.log("THIS IS THE FORM DATA BEING DISPATCHED *********", formData)

    for (let key of formData.entries()) {
      console.log("stackoverflow", key[0] + ', ' + key[1]);
  }

  //

    const response = await dispatch(editTut(tutId, formData));

    if (response.ok) {
      await response.json();
      setImageLoading(false);
      history.push("/");
    } else {
      setImageLoading(false);

      console.log("error");
    }
  };

  const updateThumbnail = (e) => {
    const thumbFile = e.target.files[0];
    // console.log("THIS IS THE THUMB FILE ************",thumbFile)
    setThumbnail(thumbFile);
  };

  const updateTutVideo = (e) => {
    const vidFile = e.target.files[0];
    // console.log("THIS IS THE VID FILE ****************", vidFile)

    // console.log("THESE ARE THE FILESSSSSSSS ************", e.target.files)

    if (vidFile.size > 30 * 1000 * 1000) {
      let errors = [];
      errors.push("Your Tut is too long. Please choose an MP4 smaller than 30MB.")
      setErrors(errors)
      return alert("Cannot Submit")
  } else {
    setMp4(vidFile)
  }
    setMp4(vidFile);
  };

  return (
    <div>
       <div>
          <ul className="errors">
            {userHasSubmitted &&
              errors.map((error) => (
                <li className="errors" key={error}>
                  {error}
                </li>
              ))}
          </ul>
          {/* {setUserHasSubmitted(false)} */}
        </div>

      <form onSubmit={handleSubmit}>
        <label>Title of your Tut</label>
        <input
          required
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Upload your File (mp4 only please)</label>
        <input required type="file" accept=".mp4" onChange={updateTutVideo} />
        <label>Description - tell us about this Tut!</label>
        <input required type="text" onChange={(e) => setDescription(e.target.value)} />
        <label>Thumbnail</label>
        <input required type="file" accept="image/*" onChange={updateThumbnail} />
        <button type="submit">Submit</button>
        {imageLoading && <p>Loading...</p>}
      </form>
 </div>
  );
}

export default EditTutForm;
