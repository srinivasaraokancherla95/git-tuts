import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
      super()
    
      this.state = {
         username:"",
         password:""
      }
      this.handleusername=this.handleusername.bind(this)
      this.handlepassword=this.handlepassword.bind(this)

      
      }
      handleusername(event){
        this.setState({username: event.target.value})
    }
    handlepassword(event){
      this.setState({password: event.target.value})
    }
    submithandler(event){
      event.preventDefault()
      console.log(this.state.username, this.state.password)
    }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
            <input type='text' value={this.state.username}onChange={this.handleusername}/>
            <input type='password'value={this.state.password}onChange={this.handlepassword}/>
            <input type='submit' value="submit"/>
        </form>
        </div>
    )
  }
}
