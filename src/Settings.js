import React from "react";
import "./settings.css";
import "./SideBar";
import SideBar from "./SideBar";

export default function Settings() {
    return (
      <div className='settings'>
        <div className='settingsWrapper'>
          <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Account</span>
          </div>
          <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsProfilePicture'>
              <img
                className='settingsFormImage'
                src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/249/original/Yellowstone_mountains.jpg?1723263171'
                alt='Yellowstone Forest'
              />
              <label htmlFor='fileInput'>
                <i className='settingsProfilePictureIcon fa-regular fa-user'></i>
              </label>
              <input type='file' id='fileInput' style={{ display: 'none' }} />
            </div>
            <label>Username</label>
            <input type='text' placeholder='Maja' />
            <label>Email</label>
            <input type='text' placeholder='Maja@gmail.com' />
            <label>Password</label>
            <input type='password' />
            <button className='settingsSubmit'>Update</button>
          </form>
        </div>
        <SideBar />
      </div>
    );
}