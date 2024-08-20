import React from "react";
import "./post.css";

export default function Post() {
    return (
      <div className='post'>
        <img
          className='postImage'
          src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/140/171/original/john-bell-haGopMEwC6M-unsplash.jpg?1724123504'
          alt='Wild Coyote'
        />
        <div className='postInfo'>
          <div className='postCategories'>
            <span className='postCategories'>Animals</span>
          </div>
          <span className='postTitle'>
            Coyote (Canis latrans)
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
        </div>
      </div>
    );
}