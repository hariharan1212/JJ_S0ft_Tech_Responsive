import React from 'react';

export default function SummaryDivrhs2(){

    return(
        <>
        <div style={{
              width:"100%",
              height:"auto",
              borderRadius:"10px",
              margin:"25px 10px 15px 0",
              background:"#FFFFFF",
            
            }} className='summaryDivrhs2'>
              <div>
              <p style={{fontSize:"13px",marginLeft:"10px"}}> <b>Add User Who Needs To Be Part Of This MOM</b></p>
              </div>
              <div  style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                <label>Choose Admin<span style={{color:"red"}}>*</span></label> <br/>
                <select name="select" id="empty-select" style={{width:"100%",height:"30px",fontSize:"10px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select mode--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> 
              </div>
              <div className='summaryDivrhs2_sub' 
              style={{display:"inline-flex",margin:"0 0 0 10px",fontSize:"12px"}}
              >
                <div style={{width:"auto"}}>
                       <label>Attendees List<span style={{color:"red"}}>*</span></label><br/>
                       <input type="text" class="form-control" placeholder="Enter here" style={{width:"200px",height:"30px",fontSize:"10px",paddingRight:"50px"}}/>
                       <p style={{fontSize:"10px",margin:"10px 0px 5px 20px"}}>
                      <input type="file"  style={{color:"#a95bf1"}}/>
                      </p>
                </div>
                <div style={{width:"auto"}}>
                      <label>E-mail<span style={{color:"red"}}>*</span></label> <br/>
                       <input type="text" class="form-control" placeholder="Enter your mail" style={{width:"200px",height:"30px",fontSize:"10px",paddingRight:"50px"}}/>
                       <p style={{fontSize:"10px",margin:"10px 0px 5px 20px"}}>
                       <input type="file"  style={{color:"#a95bf1"}}/>
                       </p>
                </div>
              </div>
              </div>
        </>

    )

}