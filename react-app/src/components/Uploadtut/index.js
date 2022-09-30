//UploadTut

import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const UploadTut = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.session.user)

    const [errors, setErrors] = useState([])

    const [image, setImage] = useState(null);

    const [imageLoading, setImageLoading] = useState(false);

    const [mp4, setMp4] = useState(null)
    // const [, setMp4] = useState(null)




    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("tut_video", image);  // THIS IS WHERE WE NEED TO BE CAREFUL WITH OUR NAME IN THE BACKEND  AWS-todo

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/tuts/upload-tut', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
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
