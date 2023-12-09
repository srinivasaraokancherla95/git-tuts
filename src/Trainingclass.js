import React, { Component } from 'react'

export default class Trainingclass extends Component {
    constructor(props){
        super(props)
        this.props=props;
    }
  render() {

    return (
      <div>
       <p>Course:{this.props.courseName}</p>
       <p>Price:{this.props.price}</p>
       <p>Duration:{this.props.duration}</p> 
        </div>
    )
  }
}
