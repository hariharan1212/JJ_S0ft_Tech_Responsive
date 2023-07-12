import React from 'react';

export default function SummaryDivrhs1 (){

    return(
        <>
        <div style={{
              width:"100%",
              height:"auto",
              borderRadius:"10px",
              margin:"30px 10px 15px 0",
              background:"#FFFFFF",
            }} class="container" className='summaryDivrhs1'>
             <div>
             <p style={{fontSize:"13px",marginLeft:"10px"}}> <b> Meeting Details </b></p>
             </div>
            
             <div  className="formdiv" >
                <div  style={{margin:"-10px 0 0 30px",fontSize:"12px"}}>
                  <label>Meeting Mode<span  style={{color:"red"}}>*</span></label><br/>
                  <select name="select" id="empty-select" style={{width:"100%",height:"20px",fontSize:"10px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px",paddingRight:"50px"}}>
                 <option >--Select mode--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> 
                </div>
                <div  style={{margin:"-10px 0 0 30px",fontSize:"12px"}} >
                  <label>Meeting Date<span style={{color:"red"}}>*</span></label><br/>
                  <input type="date" class="form-control" style={{width:"100%",fontSize:"10px",paddingRight:"50px"}}/>
                </div>
                <div style={{margin:"-10px 0 0 30px",fontSize:"12px"}} >
                  <label>Enter meeting subject<span style={{color:"red"}}>*</span></label><br/>
                  <input type="text" class="form-control" placeholder="Enter here" style={{width:"100%",fontSize:"10px"}}/>
                </div>
                <div style={{margin:"-10px 0 0 30px",fontSize:"12px"}} >
                  <label>Meeting time<span style={{color:"red"}}>*</span></label><br/>
                  <input type="time" class="form-control"style={{width:"100%",fontSize:"10px",paddingRight:"100px"}} />
                </div>
                </div>  
                <div  style={{margin:"10px 0 0 10px",fontSize:"12px"}} >
                  <label>Meeting Summary<span style={{color:"red"}}>*</span> </label> <br/>
                  <textarea class="form-control" style={{margin:"0px 0px 0 5px" ,width:"98%",height:"50px"}}> </textarea>
                </div>
                </div>
        </>
       

    )

}