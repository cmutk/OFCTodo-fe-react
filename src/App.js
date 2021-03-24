import React, { useState } from 'react';
import Header from './components/Header.js';
import TaskBoard from './pages/TaskBoard.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Modal from './components/Modal.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  const [show, setShow] = useState(false);
  return (
    <main className="App">
      <button onClick={()=>{setShow(true)}}>Show Modal</button>
      <Modal size="lg" onClose={()=>{setShow(false)}} show={show} >
        <p>I am modal content</p>
      </Modal>
      <Router>
      <Header/>
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
