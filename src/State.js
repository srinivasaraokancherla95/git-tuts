import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state={
            name: "Srinivas",
            age:"25",
            place: "Bhimavaram",

        }
    }

    clickHandler=()=>{
        this.setState({
            name: "Kancharla",
            age:29,
            place: "Gollapalli",
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.place}</p>
        <button onClick={this.clickHandler}>Update</button>
      </div>
    )
  }
}
