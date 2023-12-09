import React, { Component } from 'react'
import './Student.css'
export default class Student extends Component {
    constructor(){
        super()
        this.state={
            marks:{
                telugu: 98,
                english:95,
                hindi:97,
                maths:99,
                social:94,
                science:99
            }
        }
    }
  render() {
    return (
      <div>
        <p>{this.state.marks.english}</p>
        <p>{this.state.marks.social}</p>
      </div>
    )
  }
}

