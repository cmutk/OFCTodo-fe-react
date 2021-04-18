import React, {useState,useEffect} from 'react';
import Navbar from './components/Navbar.js';
import TaskBoard from './pages/TaskBoard.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import NewTask from './pages/NewTask.js'
import ModalLarge from './components/ModalLarge.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {  
  const [show, setShow] = useState(false);
  const closeModal=()=> {setShow(false)}
  const LOCAL_STORAGE_KEY_TASKS = 'ofcourse.tasks';
  const tasksOnLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TASKS))
  const [tasks, setTasks] = useState(tasksOnLocalStorage||[])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TASKS, JSON.stringify(tasks))
    
  }, [tasks])

  return (
    <main className="App">
      <Router>
      <Navbar right={<button onClick={()=>{setShow(true)}}> New Task !</button>}/>
      <ModalLarge content={<NewTask onClose={closeModal} setTasks={setTasks}/>} headerOf="newtask" title="New Task" show={show} onClose={closeModal}/>
        <Switch>
          <Route path="/" exact render={(props)=>(<TaskBoard {...props} setTasks={setTasks} tasks={tasks} />)} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        </Router>
    </main>
  );
}

export default App;
