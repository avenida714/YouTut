//UploadTut

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadTut } from "../../../store/tuts";

import "./UploadTut.css"


const UploadTut = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([])
    const [imageLoading, setImageLoading] = useState(false);

    //inputs for backend
    const [title, setTitle] = useState("") //tut_title
    const [mp4, setMp4] = useState(null) //tut_video
    const [description, setDescription] = useState("") //tut_description
    const [thumbnail, setThumbnail] = useState(null)//thumbnail_pic

    const [userHasSubmitted, setUserHasSubmitted] = useState(false);


    // useEffect(() => {
    //   let errors = [];


    //   if (title.length <= 0 || title.length > 50) {
    //     errors.push("Please provide a title no longer than 50 characters.");
    //   }

    //   if (description.length <= 0) {
    //     errors.push("Please provide a short description of your Tut.");
    //   }

    //   // if (!image_url?.includes("jpg") &&) {
    //   //   errors.push("Please use jpg, jpeg or png");
    //   // }


    //   setErrors(errors);
    // }, [title, description]);




    const handleSubmit = async (e) => {
        setUserHasSubmitted(false)

         e.preventDefault();
        setUserHasSubmitted(true)

        const arrOfErrors = [];

        if (errors.length > 0) {
          setUserHasSubmitted(true)
          return alert("Cannot Submit");
        }


        const formData = new FormData();
        // CAREFUL WITH OUR NAME IN THE BACKEND  AWS-todo
        formData.append("tut_title", title);
        formData.append("tut_video", mp4);
        formData.append("tut_description", description)
        formData.append("thumbnail_pic", thumbnail)

        // slow—displaying;  loading message is a good idea
        setImageLoading(true);


        const response = await dispatch(uploadTut(formData))
        // console.log("this is the response from the upload tut dispatch ******************",response, "<---RES OK->>",response.ok, "Res NOT OK *****>", !response.ok)


         if (!response.ok){
          const body = await response.json()
          console.log("THIS IS THE BODY ***********", body)
          arrOfErrors.push(body.errors)
          setImageLoading(false)
          setErrors(arrOfErrors)

          // if (errors[0] === "[object Object]" ) {
          //   console.log(errors[0])
          //   setErrors("Upload Successful!")
          // }

        }
        // else {
        //     setImageLoading(false);
        //     // a real app would probably use more advanced
        //     // error handling
        //     console.log("error");
        //     // setErrors(response) for more advanced error handling later
        // }

        if (response.ok) {

          setImageLoading(false);
          // history.push("/")
        }
    }

    const preventDragHandler = (e) => {
      e.preventDefault();
    }

    const updateThumbnail = (e) => {
        setUserHasSubmitted(true)

        const thumbFile = e.target.files[0];

        // // console.log("THIS IS THE thumb FILE ****************", thumbFile?.type)

        // if (thumbFile?.type !== "image/jpeg" &&
        // thumbFile?.type !== "image/jpg" &&
        // thumbFile?.type !== "image/png" &&
        // thumbFile?.type !== "image/gif") {

        //   setErrors([...errors, "Only jpeg, jpg, png, or gif files will be accepted as thumbnails, please."])
        // console.log("THIS IS THE THUMB FILE ************",thumbFile)

        setThumbnail(thumbFile);

  }

    const updateTutVideo = (e) => {
        setUserHasSubmitted(true)
        const vidFile = e.target.files[0];

        // console.log("THIS IS THE VID FILE ****************", vidFile)
        // console.log("THIS IS THE VIDFILE TYPE ******", vidFile.type)

        // if (vidFile?.size > 30 * 1000 * 1000) {
        //     setErrors([...errors, "Your Tut is too long. Please choose an MP4 smaller than 30MB."])
        // } else if (vidFile?.type !== "video/mp4"){
        //   // console.log(vidFile?.type, "<----- THIS IS THE VIDFILE.TYPE")
        //   setErrors([...errors, "Only MP4 files will be accepted as your video, please."])
        // } else if (vidFile?.type === "video/mp4"){
        //   setErrors([])
          setMp4(vidFile)
        // }

        // console.log("THESE ARE THE FILESSSSSSSS ************", e.target.files)

    }

    // console.log("THESE ARE THE ERRORS", errors)

    useEffect(() => {
      let errs = [];

      if (mp4?.size > 30 * 1000 * 1000) {
        errs.push("Your Tut is too long. Please choose an MP4 smaller than 30MB.")

      }

      if (mp4?.type !== "video/mp4"){
      // console.log(vidFile?.type, "<----- THIS IS THE VIDFILE.TYPE")
      errs.push("Only MP4 files will be accepted as your video, please.")
      }

      if (thumbnail?.type !== "image/jpeg" &&
      thumbnail?.type !== "image/jpg" &&
      thumbnail?.type !== "image/png" &&
      thumbnail?.type !== "image/gif") {

        errs.push( "Only jpeg, jpg, png, or gif files will be accepted as thumbnails, please.")
      // console.log("THIS IS THE THUMB FILE ************",thumbFile)

      }
      if (title)
      if (title.length > 100 || title.length < 5) {
        errs.push("Your title must be between 5 and 100 characters long, please.")
      }
      if (description)
      if (description.length > 300 || description.length < 5) {
        errs.push("Your description should be between 5 and 300 characters long.")
      }

      if (errs.length > 3) {
        errs.push("Your name must be Owen Wilson, because you're a bad actor.")
      }


      setErrors(errs)

    }, [mp4, thumbnail, title, description])


    return (
        <div className="outer-wrapper-upload">
         <div>
          <ul className="upload-errors">
            {userHasSubmitted &&
              errors?.map((error) => (
                <li className="upload-errors" key={error}>
                  {error}
                </li>
              ))}

          </ul>
          {/* {setUserHasSubmitted(false)} */}
        </div>

        <form className="upload-form" onSubmit={handleSubmit}>
            <label className="upload-label">Title of your Tut</label>
            <input className="upload-input"
                required
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <label className="upload-label">Upload your File (mp4 only please)</label>
            <input className="upload-input"
                required
                type="file"
                accept=".mp4"
                onChange={updateTutVideo}
                onDragStart={preventDragHandler}
            />
            <label className="upload-label">Description - tell us about this Tut!</label>
            <input className="upload-input"
                required
                type="text"
                onChange={(e) => setDescription(e.target.value)}
            />
            <label className="upload-label">Thumbnail - include a jpeg, jpg, png, or gif</label>
            <input className="upload-input"
              required
              type="file"
              accept="image/*"
              onChange={updateThumbnail}

            />
            <button type="submit">Upload!</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>

        </div>
    )
}

export default UploadTut;
