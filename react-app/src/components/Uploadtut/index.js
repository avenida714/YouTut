//UploadTut

import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadTut } from "../../store/tuts";


const UploadTut = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.session.user)

    const [errors, setErrors] = useState([])

    const [image, setImage] = useState(null);

    const [imageLoading, setImageLoading] = useState(false);

    //inputs for backend
    const [title, setTitle] = useState("") //tut_title
    const [mp4, setMp4] = useState(null) //tut_video
    const [description, setDescription] = useState("") //tut_description
    const [thumbnail, setThumbnail] = useState(null)//thumbnail_pic




    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        // THIS IS WHERE WE NEED TO BE CAREFUL WITH OUR NAME IN THE BACKEND  AWS-todo
        formData.append("tut_title", title);
        formData.append("tut_video", mp4);
        formData.append("tut_description", description)
        formData.append("thumbnail_pic", thumbnail)

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        // const response = await ('/api/tuts/upload-tut', {
        //     method: "POST",
        //     body: formData,
        // });

        const response = await dispatch(uploadTut(formData))
        console.log("this is the response from the upload tut dispatch ******************",response)

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
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            <button type="submit">Submit</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>
    )
}

export default UploadTut;
