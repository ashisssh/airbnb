import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
function Header() {
  return (
    <div className='header' col-lg-12 col-sm-3>
        <img
        className="header_icon"
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" 
        alt=""
        />
        <div className='header_center'>
            <input type= "text" />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Become a post</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
    </div>
  )
}

export default Header