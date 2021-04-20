import React, {useState,useEffect,useReducer} from 'react';
import Navbar from './components/Navbar.js';
import TaskBoard from './pages/TaskBoard.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import NewTask from './pages/NewTask.js';
import ModalLarge from './components/ModalLarge.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CalculateTaskStatus} from './components/Utilities.js';

export const ACTIONS={
  ADD_TASK:"add-task",
  DELETE_TASK:"delete-task",
  COMPLETE_TASK:"complete-task",
  CALCULATE_TASK_STATUS:"calculate-task-status",
}

function reducer(tasks,action){
  switch(action.type){
    case ACTIONS.ADD_TASK:
    console.log(action.payload.task)
    return [...tasks,action.payload.task];
    case ACTIONS.CALCULATE_TASK_STATUS:
    return tasks.map((task)=>{
        const taskStatus = CalculateTaskStatus(task);
        task.status = taskStatus;
        return task;
    })
    case ACTIONS.DELETE_TASK:
    return tasks.filter((task)=>task.id!==action.payload.id);
    case ACTIONS.COMPLETE_TASK:
    return tasks.map((task)=>{
        if(task.id===action.payload.id){
          return {...task,completed:true,status:"completed"};
        }
        return task;
    })
    default:
      return tasks;
  }
  

}
function App() {  
  const [show, setShow] = useState(false);
  const closeModal=()=> {setShow(false)}
  const LOCAL_STORAGE_KEY_TASKS = 'ofcourse.tasks';
  const tasksOnLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TASKS));
  const initialStateOfReducer =tasksOnLocalStorage||[];
  const [tasks,dispatch] = useReducer(reducer, initialStateOfReducer)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TASKS, JSON.stringify(tasks))
  }, [tasks]);
  useEffect(()=>{dispatch({type:ACTIONS.CALCULATE_TASK_STATUS});},[tasks.length]);
  
  console.log("APP CALLED!",tasks)
  
  return (
    <main className="App">
      <Router>
      <Navbar right={<button onClick={()=>{setShow(true)}}> New Task !</button>}/>
      <ModalLarge content={<NewTask onClose={closeModal} dispatch={dispatch}/>} headerOf="newtask" title="New Task" show={show} onClose={closeModal}/>
        <Switch>
          <Route path="/" exact render={()=>(<TaskBoard dispatch={dispatch} tasks={tasks} />)} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        </Router>
    </main>
  );
}

export default App;
