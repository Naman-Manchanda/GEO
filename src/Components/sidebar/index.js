
import React from 'react'
import Sidebaritem from './Sidebaritem.js'
import Upload from './Upload.js'
import '../../styles/Sidebar.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const index = () => {
  return (
    <>
    <div className='sideBar'>
        
        <div className="sideBar__itemsContainer">
            <Sidebaritem arrow icon={(<InsertDriveFileIcon/>)} label={'My Drive'}/>
            <Sidebaritem icon={(<QueryBuilderIcon fontSize='large'/>)} label={'Recent'}/>
            <Sidebaritem icon={(<StarBorderIcon fontSize='large'/>)} label={'Starred'}/>
            <Sidebaritem icon={(<DeleteOutlineIcon/>)} label={'Bin'}/>
        </div>
    </div>
    <Upload/>
</>
  )
}

export default index