import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import TaskBoard from './pages/TaskBoard.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {  
  const [showModal, setShowModal] = useState(false);
  const closeModal=()=> {setShowModal(false)};
  console.log("APP CALLED!")
  
  return (
    <main className="App">
      <Router>
      <Navbar right={<button onClick={()=>{setShowModal(true)}}> New Task !</button>}/>
      
        <Switch>
          <Route path="/" exact render={()=>(<TaskBoard showModal={showModal} onClose={closeModal} />)} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        </Router>
    </main>
  );
}

export default App;
