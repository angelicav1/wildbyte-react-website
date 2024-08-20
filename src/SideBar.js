import React from "react";
import "./sidebar.css";

export default function SideBar() {
    return (
      <div className='sidebar'>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>ABOUT ME</span>
          <img
            className='wildByteImage'
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/146/original/Transparent_Logo.png?1715439255'
            alt='About Wild Byte'
          />
          <p className='aboutMe'>
            Wild Byte is a project that utilizes natural history and technology to showcase stories of the natural world for everyone to enjoy!
          </p>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>CATEGORIES</span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Animals</li>
            <li className='sidebarListItem'>Forests</li>
            <li className='sidebarListItem'>Water</li>
            <li className='sidebarListItem'>Sky</li>
          </ul>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>FOLLOW US</span>
          <div className='sidebarSocial'>
            <i className='sidebarIcon fa-brands fa-instagram'></i>
            <i className='sidebarIcon fa-brands fa-spotify'></i>
            <i className='sidebarIcon fa-brands fa-tiktok'></i>
          </div>
        </div>
      </div>
    );
}