import React from 'react'

function Training(props) {
  return (
    <div>
      <p>Course name: {props.course}</p>
      <p>Price:{props.Price}</p>
      <p>Duration: {props.duration}</p>
    </div>
  )
}

export default Training