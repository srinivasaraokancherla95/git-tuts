import React from 'react'
import { useNavigate } from 'react-router-dom'

function Registrationform() {
  
  return (
    <div>
        <form>
        <h1>Registrationform</h1>
        <lable>Full Name  </lable>
        <input type='text'/>
        <br/><br/>
        <lable>Father Name  </lable>
        <input type='text'/>
        <br/><br/>
        <lable>Date of Birth </lable>
        <input type='date'/>
        <br/><br/>
        <lable>gender</lable>
        <select name="gender" >
            <option value=""></option>
                
        <option value="Male">Male</option>
        <option value="sFemale">Female</option></select>
         <br/><br/>
         <lable>Phone Number</lable>
    <input type='number'/>
    <br/>
    <lable>Qualification</lable>
    <input type='text'/>
    <br/><br/>
    <lable>Age</lable>
    <input type='number'/>
    <br/><br/>
    <lable>Skills:</lable>
    <input type='textarea'/>
    <br/><br/>
    <lable>CGPA</lable>
    <input type='text'/>
    <br/><br/>
    <lable>Year of Passout</lable>
    <input type='date'/>
    <br></br><br></br>
    <input type='submit' value="submit"/>
    

    </form>
         
    
    

    </div>
  )
}

export default Registrationform