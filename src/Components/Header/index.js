import React from "react";
import '../../styles/Header.css'

// import GDriveLogo from '../../Media/Marcus-Roberto-Google-Play-Google-Drive.ico'
import GeoLogo from '../../Assets/GeoLogo.svg'
import ProfileLogo from '../../Assets/ProfileLogo.svg'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingIcon from '@material-ui/icons/Settings';

const index =() =>{
    return(
        <div className="header">
            <div className="header__logo">
                <img src={GeoLogo} alt="" />
                <span>Geo</span>
            </div>
          
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon/>
                    <input type="text" placeholder="Search in drive" />
                    <ExpandMoreIcon/>
                </div>
                </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon fontSize="large"/>
                    <SettingIcon/>
                    <AppsIcon/>
                </span>

              
                <img src= {ProfileLogo} alt="User Image" />
            </div>
        
        </div>
    )
}

export default index