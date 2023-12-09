import React from 'react'
import { useNavigate } from 'react-router-dom'

function Eventhandler() {
  const navigate=useNavigate
  
    const clickHandler = ()=>{
        console.log("Button is clicked")
    }
    
    const handleRegistration = ()=>{
     navigate("/Reg")
  }
  return (
    <div>
        <button onClick={clickHandler}>Click Here</button> <br/>

        <button onClick={handleRegistration}>Registrationform</button>
    </div>
  )
}

export default Eventhandler