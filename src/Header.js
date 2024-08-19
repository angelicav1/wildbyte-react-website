import React from "react";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">Wild Byte</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img className="headerImage" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/249/original/Yellowstone_mountains.jpg?1723263171" alt="Yellowstone Forest"></img>
        </div>
    )
}