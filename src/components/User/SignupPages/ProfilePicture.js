import React, {useState, useEffect, useContext } from 'react'
import authContext from "../../../Context/authContext";
// import ReactCrop from 'react-image-crop';
import { FiPlus } from 'react-icons/fi';
// import 'react-image-crop/dist/ReactCrop.css';
import { Fragment } from 'react';


function ProfilePicture({src, onNext, onPrev}) {
    const [crop, setCrop] = useState({ aspect: 1 / 1 });
    const [userProfilePicture, setProfilePicture] = useState();

  const { allData, setAllData } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(allData.userDetails);
    
  const handleFileSelect = (e) => {
    console.log("File select", e.target.files[0]);
    readImage(e.target.files[0]);
    setProfilePicture(e.target.value);
  }

  function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        document.getElementById("upload-preview").src = event.target.result;
    });
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    console.log("User Details on PP page",userDetails);
    if(userDetails.profileImage) {
      setProfilePicture(userDetails.profileImage);
    }
  }, [])


  return (
      <div className="process-panel-wrap is-active" >
        <div className="form-panel">
          <div className="photo-upload">
            <div className="preview">
              <label className="upload-button" htmlFor="file-upload">
                  <FiPlus />
              </label>
              <input type="file" id="file-upload"  onChange={handleFileSelect} style={{display:'none'}}/> 
              <img
                  id="upload-preview"
                  src={
                    userProfilePicture
                      ? userProfilePicture
                      : "https://via.placeholder.com/150x150"
                  }
                  data-demo-src="assets/img/avatars/avatar-w.png"
                  alt=""
              />      
            </div>
            {/* <div className="crop-box-container">
              <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} className="crop-box"/>  
            </div> */}
            <div className="limitation">
              <small>
                Only images with a size lower than 3MB are allowed.
              </small>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            className="button process-button is-next"
            data-step={"step-dot-4"}
            onClick={onNext}>
            Skip
          </button>
          <button
            className="button process-button"
            data-step={"step-dot-2"}
            onClick={onPrev}>
            Back
          </button>
          <button
            className="button process-button is-next"
            data-step={"step-dot-4"}
            onClick={onNext}>
            Next
          </button>
        </div>
      </div>
  )
}

export default ProfilePicture
