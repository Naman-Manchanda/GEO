import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import '../../styles/SidebarItem.css'

const Sidebaritem = ({arrow,icon,label}) => {
  return (
    <div className='sidebarItem'>

        <div className="sidebarItem_arrow">
            {arrow &&(<ArrowRightIcon/>)}
        </div>

        <div className="sidebarItem__main">
            {icon}
            <p>{label}</p>
        </div>

    </div>
  )
}

export default Sidebaritem