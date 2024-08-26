import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
    return (
      <div className='top'>
        <div className='topLeft'>
          <i className='topIcon fa-brands fa-instagram'></i>
          <i className='topIcon fa-brands fa-spotify'></i>
          <i className='topIcon fa-brands fa-tiktok'></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link to='/' className='link'>
                HOME
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/'>
                ABOUT
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/'>
                CONTACT
              </Link>{' '}
            </li>
            <li className='topListItem'>
              <Link className='link' to='/write'>
                ARTICLES
              </Link>
            </li>
            {user && <li className='topListItem'>LOGOUT</li>}
          </ul>
        </div>
        <div className='topRight'>
          {user ? (
            <Link className='link' to='/settings'>
              <img
                className='topImage'
                src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/146/original/Transparent_Logo.png?1715439255'
                alt=''
              />
            </Link>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>
                  LOGIN
                </Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to='/register'>
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
    );
}