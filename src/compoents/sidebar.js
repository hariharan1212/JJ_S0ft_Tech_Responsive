import React from "react";
import { FaFilePowerpoint } from "react-icons/fa"
import { BsFileBarGraph } from "react-icons/bs"
import {VscGraph} from "react-icons/vsc"
import {CgProfile} from "react-icons/cg"



export default function Sidebar() {

 
    return (
        <>
        <div className="sidebar" >
      <a href="#" className="sidebaricon" >  <p> <FaFilePowerpoint /> </p></a>
      <a href="#" className="sidebaricon">  <p> <BsFileBarGraph/></p></a>
      <a href="#" className="sidebaricon">  <p> <VscGraph/></p></a>
      <a href="#" className="sidebaricon">  <p> <CgProfile/></p></a>
      <a href="#" className="sidebaricon">  <p> <BsFileBarGraph/></p></a>
        </div>
        </>
    )
}