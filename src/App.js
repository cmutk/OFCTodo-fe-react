import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import TaskBoard from './pages/TaskBoard.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import NewTask from './components/NewTask.js'
import ModalLarge from './components/ModalLarge.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {  
  const [show, setShow] = useState(false);
  const closeModal=()=> {setShow(false)}
  return (
    <main className="App">
      <Router>
      <Navbar right={<button onClick={()=>{setShow(true)}}> New Task !</button>}/>
      <ModalLarge content={<NewTask onClose={closeModal}/>} headerOf="newtask" title="New Task" show={show} onClose={closeModal}/>
        <Switch>
          <Route path="/" exact component={TaskBoard} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        </Router>
    </main>
  );
}

export default App;
