import React, { Component } from 'react'




export default class Employee extends Component {
  constructor(){
    super()
    this.state={
        employees :[
    {id:1,name:"srinivas",age:27, profisional:"Software Engineer"},
    {id:8,name:"Bhavya Sree",age:26, profisional:"Executive Engineer"},
    {id:2,name:"Keerthi",age:27, profisional:"HR"},
    {id:3,name:"Harish",age:29, profisional:"Software Developer"},
    {id:4,name:"Vasu",age:29, profisional:"Mechanical Engineer"},
    {id:5,name:"Shanmukha",age:30, profisional:"Backend Developer"}
]
    }
  }
  render() {
    return (
      <table  border="2px" paddin="10px" height="100px" width="50%px">
        
           {this.state.employees.map((emp)=>{
                return(
                    <tr key={emp.id}>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.profisional}</td>
                    </tr>
                )
            } )}
        </table>
    )
  }

}