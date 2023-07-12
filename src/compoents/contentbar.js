import React from "react";
import ContentHeadder from "./content_headder.js"
import SummaryHeadder from "./content_summary_headder.js";
import SummaryDiv from "./meeting_summar_div.js";

 export default function Contentbar(){
    return (
        <>
        <div className="contentbar">
            <ContentHeadder/>
            <SummaryHeadder/>
            <SummaryDiv/>
        </div>
        </>
    )
 }