
import './App.css';
// import ComponentA from './ComponentA';
import Samfunctionbase from './Samfunctionbase';
// import Course from './Course';
// import Mycomponent from './Mycomponent';
// import Training from './Training';
// import Trainingclass from './Trainingclass';

// import State from './State';
// import Student from './Student';
// import Cort from './Cort';
// import Employee from './Employee';
// import Conditionalrandiring from './Conditionalrandiring';
// import Login from './Login';
// import Lifecycle from './Lifecycle';
// import Counter from './Counter';
// import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registrationform from './Registrationform';
import Loginform from './Loginform';
import Eventhandler from './Eventhandler';
import Employeement from './Employeement';
import Datafetching from './Datafetching';
import Function from './Function'
function App() {
  return (
    <Router>
    <div className="App">
      
        <Routes>
        <Route exact path='/' element={<Samfunctionbase/>}></Route>
        <Route exact path='/Reg' element={<Registrationform/>}></Route>
        <Route exact path='/Log' element={<Loginform/>}></Route>
        <Route exact path='/Eve' element={<Eventhandler/>}></Route>
        <Route exact path='/Emp/:id' element={<Employeement/>}></Route>
        <Route exact path='/Detainc' element={<Datafetching/>}></Route>
        <Route exact path='/Fun' element={<Function/>}></Route>
        
        </Routes>
             
    </div>
    </Router>
  );
}

export default App;
