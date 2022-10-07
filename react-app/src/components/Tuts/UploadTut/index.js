//UploadTut

import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadTut } from "../../../store/tuts";


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

        // if (response.ok) {
        //   await response.json();
        //   setImageLoading(false);
        //   setErrors([])
        //   // history.push("/")
        // }
    }

    const preventDragHandler = (e) => {
      e.preventDefault();
    }

    const updateThumbnail = (e) => {
        setUserHasSubmitted(true)

        const thumbFile = e.target.files[0];

        // console.log("THIS IS THE thumb FILE ****************", thumbFile?.type)

        if (thumbFile?.type !== "image/jpeg" &&
        thumbFile?.type !== "image/jpg" &&
        thumbFile?.type !== "image/png" &&
        thumbFile?.type !== "image/gif") {

          setErrors([...errors, "Only jpeg, jpg, png, or gif files will be accepted as thumbnails, please."])
        // console.log("THIS IS THE THUMB FILE ************",thumbFile)
      } else {
        setErrors([])
        setThumbnail(thumbFile);
      }
  }

    const updateTutVideo = (e) => {
        setUserHasSubmitted(true)
        const vidFile = e.target.files[0];

        // console.log("THIS IS THE VID FILE ****************", vidFile)
        // console.log("THIS IS THE VIDFILE TYPE ******", vidFile.type)

        if (vidFile?.size > 30 * 1000 * 1000) {
            setErrors([...errors, "Your Tut is too long. Please choose an MP4 smaller than 30MB."])
        } else if (vidFile?.type !== "video/mp4"){
          // console.log(vidFile?.type, "<----- THIS IS THE VIDFILE.TYPE")
          setErrors([...errors, "Only MP4 files will be accepted as your video, please."])
        } else if (vidFile?.type === "video/mp4"){
          setErrors([])
          setMp4(vidFile)
        }

        // console.log("THESE ARE THE FILESSSSSSSS ************", e.target.files)

    }

    console.log("THESE ARE THE ERRORS", errors)

    return (
        <div>
         <div>
          <ul className="errors">
            {userHasSubmitted &&
              errors?.map((error) => (
                <li className="errors" key={error}>
                  {error}
                </li>
              ))}
              {errors.length > 5 ? <li className="easterEgg errors">Your name must be Owen Wilson, because you're a bad actor. Please refresh and try again.</li> : null}
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
            <input
                required
                type="file"
                accept=".mp4"
                onChange={updateTutVideo}
                onDragStart={preventDragHandler}
            />
            <label>Description - tell us about this Tut!</label>
            <input
                required
                type="text"
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>Thumbnail</label>
            <input
              required
              type="file"
              accept="image/*"
              onChange={updateThumbnail}

            />
            <button type="submit">Upload a Tut</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>

        </div>
    )
}

export default UploadTut;
