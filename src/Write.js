import React from "react";
import "./write.css";

export default function Write() {
    return (
      <div className='write'>
        <img
          className='writeImage'
          src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/140/171/original/john-bell-haGopMEwC6M-unsplash.jpg?1724123504'
          alt='Wild Coyote'
        />
        <form className='writeForm'>
          <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
              <i className='writeIcon fa-solid fa-plus'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
            <input
              type='text'
              placeholder='Title'
              className='writeInput'
              autoFocus={true}
            />
          </div>
          <div className='writeFormGroup'>
            <textarea
              placeholder='Tell your story...'
              type='text'
              className='writeInput writeText'
            ></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </form>
      </div>
    );
}