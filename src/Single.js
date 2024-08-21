import React from "react";
import SideBar from "./SideBar";
import "./single.css";
import SinglePost from "./SinglePost";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    )
}