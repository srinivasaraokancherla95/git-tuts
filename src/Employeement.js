import React from 'react'
import { useParams } from 'react-router-dom'


function Employeement() {
    const {id }= useParams()
    
  return (
    <div>Employeement 1 {id} </div>
  )
}

export default Employeement