import React, { Component } from 'react'
import Employee from './Employee'
import Student from './Student'
export default class Conditionalrandiring extends Component {
    constructor() {
      super()
      this.state={
        age:29
      }
    
      
    }
  render() {
    return (
      <div>{this.state.age>24? (<Employee/>):(<Student/>)}</div>
    )
  }
}
