import React from "react";
import { BsSearch } from "react-icons/bs"
import {MdNotifications} from "react-icons/md"

export default function ContentHeadder(){
    return (
        <>
        <div className="content_headder" >
             <div className="search_icon">
            <BsSearch className="BsSearch"/> 
             <input type="text" placeholder="search" style={{fontSize:"14px"}} />
             </div>
             <div className="noticf_icon">
             <a href="#" style={{color:"black"}}> <MdNotifications/></a>
             </div>
        </div>
        </>
    )
}