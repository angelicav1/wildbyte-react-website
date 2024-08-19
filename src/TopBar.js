import React from "react";
import "./topbar.css";

export default function TopBar() {
    return (
      <div className='top'>
        <div className='topLeft'>
          <i className='topIcon fa-brands fa-instagram'></i>
          <i className='topIcon fa-brands fa-spotify'></i>
          <i className='topIcon fa-brands fa-tiktok'></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>ARTICLES</li>
            <li className='topListItem'>LOGOUT</li>
          </ul>
        </div>
        <div className='topRight'>
          <img
            className='topImage'
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/146/original/Transparent_Logo.png?1715439255'
            alt=''
          />
          <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
    );
}