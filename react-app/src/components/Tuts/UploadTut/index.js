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
        // CAREFUL WITH OUR NAME IN THE BACKEND  AWS-todo
        formData.append("tut_title", title);
        formData.append("tut_video", mp4);
        formData.append("tut_description", description)
        formData.append("thumbnail_pic", thumbnail)

        // slow—displaying;  loading message is a good idea
        setImageLoading(true);


        const response = await dispatch(uploadTut(formData))
        // console.log("this is the response from the upload tut dispatch ******************",response)

        if (response.ok) {
            await response.json();
            setImageLoading(false);
            history.push("/");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
            // setErrors(response) for more advanced error handling later
        }
    }

    const preventDragHandler = (e) => {
      e.preventDefault();
    }

    const updateThumbnail = (e) => {
        const thumbFile = e.target.files[0];
        // console.log("THIS IS THE THUMB FILE ************",thumbFile)
        setThumbnail(thumbFile);
    }

    const updateTutVideo = (e) => {
        const vidFile = e.target.files[0];

        // console.log("THIS IS THE VID FILE ****************", vidFile)
        console.log("THIS IS THE VIDFILE TYPE ******", vidFile.type)

        if (vidFile.size > 30 * 1000 * 1000) {
            let errors = [];
            errors.push("Your Tut is too long. Please choose an MP4 smaller than 30MB.")
            setErrors(errors)
            return alert("Cannot Submit")
        } else {
          setMp4(vidFile)
        }

        // console.log("THESE ARE THE FILESSSSSSSS ************", e.target.files)

    }



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
