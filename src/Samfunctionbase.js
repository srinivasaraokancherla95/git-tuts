import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Samfunctionbase() {
  const nsvigate=useNavigate()

  const handleReg = () => {
    nsvigate("/Reg")

  }

  return (
    <>
    <div>
      
      <table  border="4" align='center'cellPadding={10} cellSpacing={0}  >
        
        <thead > <b>STATEMENT SHOWING THE EMPLOYEES DETAILS</b></thead>
        <tr>
          <td>SI</td>
          <td>Employe Name</td>
          <td>Age</td>
          <td>Employee Designation</td>
          <td>Salary</td>
        </tr>
        <tr>
          <td align='center'>1</td>
          <td align='center'>Srinivas</td>
          <td align='center'>28</td>
          <td align='center'>Digitl Assistant</td>
          <td align='center'>18000</td>
        </tr>
        <tr>
          <td align='center'>2</td>
          <td align='center'>
            vasu
          </td>
          <td align='center'>29</td>
          <td align='center'>Senior Manager</td>
          <td align='center'>25000</td>
        </tr>
        <tr>
          <td align='center'>3</td>
          <td align='center'>Bhavya Sree</td>
          <td align='center'>27</td>
          <td align='center'>Testing Aplication Developer</td>
          <td align='center'>45000</td>
        </tr>
        <tr>
          <td align='center'>4</td>
          <td align='center'>Harish</td>
          <td align='center'>28</td>
          <td align='center'>Product Team leader</td>
          <td align='center'>33000</td>
        </tr>
        <tr>
          <td align='center'>5</td>
          <td align='center'>Keerthi</td>
          <td align='center'>26</td>
          <td align='center'>HR</td>
          <td align='center'>18000</td>
        </tr>

        
        

      </table>
      <Link to="/Log">Login</Link>
      <br/>
      <Link to="/Reg">Registrationform</Link><br/>
      <p> These are anchor tags</p>
      <a href='/Log'>Login</a><br/>
      <a href='/Reg'>Registrationform</a>
      <br></br>
<br></br>
      <button onClick={handleReg}>Register</button>
    </div>
    </>
    

    
  )
   
}



export default Samfunctionbase;



