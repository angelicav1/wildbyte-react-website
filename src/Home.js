import React from "react";
import Header from "./Header";
import Posts from "./Posts";
import SideBar from "./SideBar";
import "./home.css";

export default function Home() {
    return (
      <>
        <Header />
        <div className='home'>
            <Posts />
            <SideBar />
            </div>
      </>
    );
}