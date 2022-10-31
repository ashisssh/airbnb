import React from 'react'
import './Banner.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Banner() {
   return (
        <div className='banner'col-lg-12 col-sm-3>
            <div className='banner__heading'>
                <h1>New this week</h1>
            </div>

            <div className='banner_right'>
            <ArrowForwardIosIcon />
        </div>
            
        </div>
    )
}

export default Banner