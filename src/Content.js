import React, {useState} from 'react'

function Content() {
    const[Content,setContent]=useState({
      Name:"iphone",
      OS  :"ios17",
      Price:"1,60,000",
      LanchDate:"Sep,15, 2023"
    }
        // "name: iPhone15, os: iOS17, price: 1,60,000,  launchDate: Sep 15"
        
    )

        const handleUpdate=() =>{
        setContent({
          Name:"Samsung",
          OS  : "Andriod",
          Price:"90,000",
          LanchDate:"Jan,20, 2023"

        // }"name:Samsung, os:android, price: 90000, launchDate: Jan 20th"

})} 
   
  return (
    <div>
        <h1>Content</h1>
        
        <p>Mobile Name: {Content.Name}</p>
        <p>Mobile OS: {Content.OS}</p>
        <p>Mobile Price: {Content.Price}</p>
        <p>Mobile LanchDate: {Content.LanchDate}</p>
        <button onClick={handleUpdate}>Click Update</button>
        </div>
  )
}

export default Content