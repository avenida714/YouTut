//EditTutForm

import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    setMp4(vidFile);
  };

  return (

      <form onSubmit={handleSubmit}>
        <label>Title of your Tut</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Upload your File (mp4 only please)</label>
        <input required type="file" accept=".mp4" onChange={updateTutVideo} />
        <label>Description - tell us about this Tut!</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <label>Thumbnail</label>
        <input type="file" accept="image/*" onChange={updateThumbnail} />
        <button type="submit">Submit</button>
        {imageLoading && <p>Loading...</p>}
      </form>

  );
}

export default EditTutForm;
