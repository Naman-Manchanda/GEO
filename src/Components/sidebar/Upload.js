import React  from 'react'
import AddIcon from '@material-ui/icons/Add';
import '../../styles/Upload.css'

const Upload = () => {

  return (
    <div className='upload'>
        <div className="upload__container">
            <AddIcon fontSize='large'/>
            <p>Upload
              <input type="file" name="" id="" />
            </p>
        </div>
    </div>
  )
}

export default Upload