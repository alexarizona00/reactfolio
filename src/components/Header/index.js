import React from "react";
import coverJpg from "../../assets/cover.jpg";

function Header(props){

    return (
        <header className="">
            <h1> Alex Albright</h1>
            <img src={coverJpg} alt="abstract background"></img>
            {props.children}
        </header>
    )
}


export default Header;