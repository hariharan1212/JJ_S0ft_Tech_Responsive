import React from 'react';

export default function SummaryDivrhs3(){

    return(
        <>
        <div style={{
              width:"auto",
              height:"190px",
              borderRadius:"10px",
              margin:"20px 10px 0 0",
              background:"#FFFFFF",
             
            }} className='summaryDivrhs3'>
              <div>
              <p style={{fontSize:"13px",marginLeft:"10px"}}>  <b>User Access</b></p>
              </div>
              <div style={{margin:"-13px 0 0 10px",fontSize:"12px"}}>
                <label>Search<span style={{color:"red"}}>*</span></label> <br/>
                <input type="text" placeholder="Search people here"  class="form-control" style={{width:"100%",height:"30px",fontSize:"10px"}}/>
              </div>
              <div className="tablediv" style={{margin:"10px 0 0px 10px",fontSize:"13px",width:"auto"}}>
                <table>
                  <tr >
                    <th>EMP.no</th>
                    <th>EMP.Name</th>
                    <th>Role</th>
                    <th>Provide Access To</th>
                  </tr>
                  <tr>
                    <td><b>Sample1</b></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td> <select name="select" id="empty-select" style={{width:"100px",height:"15px",fontSize:"10px",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> </td>
                  </tr>
                  <tr>
                  <td><b>Sample2</b></td>
                    <td>Atony</td>
                    <td>Thomson</td>
                    <td><select name="select" id="empty-select" style={{width:"100px",height:"15px",fontSize:"10px",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select></td>
                    </tr>
                    <tr>
                    <td><b>Sample3</b></td>
                    <td>Larry The Bird</td>
                    <td>@Twitter</td>
                    <td><select name="select" id="empty-select" style={{width:"100px",height:"15px",fontSize:"10px",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select></td>
                    </tr>
                </table>
              </div>
              </div></>
    )

}