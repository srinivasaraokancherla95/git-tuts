import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super()
        this.state={
            age: 20
        }

    }
    componentDidMount() {
        console.log("This is componentDidMountmethod")
        this.setState({
            age: 35
        })
    }

    componentDidUpdate(){
        document.write=this.state.age
    }
    componentWillUnmount(){
        
    }

  render() {
    return (
      <div>Lifecycle
        <p>{this.state.age}</p>
      </div>
    )
  }
}
