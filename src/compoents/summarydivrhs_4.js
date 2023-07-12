import React from 'react';

import {BsPencil} from "react-icons/bs"  
import {RiDeleteBin5Fill} from "react-icons/ri" 
import {IoMdRefresh} from "react-icons/io"


export default function SummaryDivrhs4 (){

    return(
        <>
        <div style={{
              width:"auto",
              height:"auto",
              borderRadius:"10px",
              margin:"20px 10px 0 0",
              background:"#FFFFFF",
            }} className='summaryDivrhs4'
           >
              <div  style={{display:"inline-flex" , width:"100%"}}>
                <div style={{width:"50%"}}>
                    <div>
                     <p style={{fontSize:"13px",marginLeft:"10px"}}><b>Meeting Inputs</b></p>
                    </div>
                    <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                        <p> <b> Add Inputs</b></p> 
                    </div>
                    <div  style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                        <button style={{ background:"#a95bf1" , border:"none",height:"25px",borderRadius:"3px",margin:"5px",color:"white",outline:"none"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Information(I)</a></button>  
                        <button style={{ background:"white" , border:"1px solid #a95bf1",height:"25px",borderRadius:"3px",margin:"5px",color:"#a95bf1",outline:"none"}}><a href="#" style={{textDecoration:"none",color:"#a95bf1"}}>Decesion(D)</a></button>
                        <button style={{ background:"white" , border:"1px solid #a95bf1",height:"25px",borderRadius:"3px",margin:"5px",color:"#a95bf1",outline:"none"}}><a href="#" style={{textDecoration:"none",color:"#a95bf1"}}>Task(T)</a></button>
                  </div>
                  <div  style={{margin:"10px 0 0 10px",fontSize:"12px"}}>
                    <label>Enter Descripition<span style={{color:"red"}}>*</span></label>
                    <textarea  class="form-control" ></textarea>
                  </div>
                  <div className='addbutton' style={{margin:"10px 0 0 10px",fontSize:"12px"}}>
                    <input type="file" style={{color:"#a95bf1"}}/>
                    <button style={{marginLeft:"120px",outline:"none",border:"1px solid #a95bf1",color:"#a95bf1",background:"white"}}><a href="#" style={{textDecoration:"none",color:"#a95bf1"}}>ADD</a></button>
                  </div>
                </div>
                <div  style={{width:"50%"}}>
                    <div className="refreshicon"style={{fontSize:"10px",margin:"5px 10px 0 0 ",textAlign:"end"}}>
                      <p> <a href="#" style={{color:"black"}}><IoMdRefresh/></a> Meeting inputs <a href="#" style={{textDecoration:"underline"}}>View History</a></p>
                    </div>
                    <div className='Meeting_Inputs_div' style={{margin:"-10px 0 0 10px",fontSize:"10px"}}>
                        <p> <b>Meeting Inputs (09 Entries)</b></p>
                    </div>
                  <div className='summaryDivrhs4_sub'style={{display:"inline-flex",width:"100%",height:"auto"}}>
                    <div style={{margin:"-10px 0 0 10px",fontSize:"12px",width:"auto",height:"auto"}}>
                            <label>Attendees List<span style={{color:"red"}}>*</span></label><br/>
                            <input type="text" placeholder="Enterhere" style={{width:"auto",fontSize:"10px",height:"30px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px"}}/>
                    </div>
                    <div style={{margin:"-10px 0 0 10px",fontSize:"12px",width:"auto",height:"auto"}}>
                    <label>Attendees List<span style={{color:"red"}}>*</span></label><br/>
                    <select name="select" id="empty-select" style={{width:"auto",height:"30px",fontSize:"10px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px",paddingRight:"50px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> 
                      </div>
                  </div>
                  <div style={{width:"100%",height:"auto",border:"1px solid #d1abf5",margin:"20px 5px 0 1px",borderRadius:"10px",padding:"3px"}} className='summaryDivrhs4_sub1'> 
                        <p className="pencil_dlt_icon" style={{margin:"0 0 0 5px",fontSize:"10px"}} > <span></span><b>Meeting Inputs (09 Entries) </b><span><a href="#"  className='BsPencil'><BsPencil /></a></span> <span><a href="#"  className='RiDeleteBin5Fill'><RiDeleteBin5Fill /></a></span></p> 

                        {/* style={{paddingLeft:"170px",color:"#a95bf1"}}  style={{color:"#ee9898"}} */}
                       <br/>
                        <p  style={{margin:"-20px 0 0 5px",fontSize:"10px"}}>Created on-03-July-2023-<span style={{color:" #a95bf1"}}>Decision (D)</span></p> <br/>
                        <p  style={{margin:"-20px 0 0 5px",fontSize:"12px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo viverra, pharetra metus non, interdum lectus. Mauris in venenatis orci. Suspendisse potenti.</p>
                  </div>
                   <div style={{width:"100%",height:"auto",border:"1px solid #d1abf5",margin:"20px 0px 0 1px",borderRadius:"10px",padding:"3px"}} className='summaryDivrhs4_sub2'>
                   <p style={{margin:"0 0 0 5px",fontSize:"10px"}}><b>Meeting Inputs (09 Entries)</b><a  href="#"  className='BsPencil1'><BsPencil/></a> <a href="#" className='RiDeleteBin5Fill1'><RiDeleteBin5Fill/></a></p> 
                   <br/>
                        <p style={{margin:"-20px  0 0 5px",fontSize:"10px"}}>Created on-03-07-2023-<span style={{color:" #a95bf1"}}>Decision (D)</span></p> <br/>
                        <p style={{margin:"-20px  0 0 5px",fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo viverra, pharetra metus non, interdum lectus. Mauris in venenatis orci. Suspendisse potenti. </p> 
                    </div>
                  </div>
              </div>
              </div>
        </>
    )

}