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
          <span className='postTitle'>Coyote (Canis latrans)</span>
          <hr />
          <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDescription'>
          The coyote, also known as the American jackal, prairie wolf, or brush
          wolf is a species of canine native to North America. It is smaller
          than its close relative, the gray wolf, and slightly smaller than the
          closely related eastern wolf and red wolf.The coyote, also known as
          the American jackal, prairie wolf, or brush wolf is a species of
          canine native to North America. It is smaller than its close relative,
          the gray wolf, and slightly smaller than the closely related eastern
          wolf and red wolf.
        </p>
      </div>
    );
}