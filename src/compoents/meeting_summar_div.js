import React from "react";
import SummaryDivlhs from "./summary_div_lhs";
import SummaryDivrhs from "./summary_div_rhs";

export default function SummaryDiv(){

    return (
        <>  
        <div className="Summarydiv" style={{width:"100%"}}>
            <div style={{width:"20%"}}>
            <SummaryDivlhs/>
            </div>
            <div style={{width:"80%"}}>
            <SummaryDivrhs/>
            </div>
        </div>
            
        </>
    )
}