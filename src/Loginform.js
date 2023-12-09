import React, { Component } from 'react';

export default class Loginform extends Component {
    constructor(){
        super()
        this.state={
            Username:"",
        
            Password:""
        }
        this.handleUsername=this.handleUsername.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.submithandler=this.submithandler.bind(this)
        
        
    }
    handleUsername(event){
        this.setState({user:event.target.value})
    }
    handlePassword(event){
        this.setState({password:event.target.value})
    }
    submithandler(event){
        event.preventDefault()
        console.log(this.state.Username, this.state.Password)
      }
      

      

  render() {
    return (
      <div>
        <h1>Fashion Club Login</h1>
        
    <lable>UserName  </lable>
    <input type='text' value={this.state.Username} onChange={this.handleUsername}/>
    <br></br>
    <lable>Password    </lable>
    <input type='password' value={this.state.Password}onChange={this.handlePassword}/>
    <br></br><br></br>
    <input type='submit' value={"submit"}/><br/><br/>
    
      </div>
    )
  }
}
