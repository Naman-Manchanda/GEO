import React  from 'react'

import '../../styles/Upload.css'
import UploadLogo from '../../Assets/UploadLogo.svg';
const Upload = () => {

  return (
    <>
    
   <div class="image-upload">
  <label for="file-input">
    <img src={UploadLogo} className="UploadLogo"/>
  </label>

   <input id="file-input" type="file" /> 
</div>
  </>
  )
}

export default Upload