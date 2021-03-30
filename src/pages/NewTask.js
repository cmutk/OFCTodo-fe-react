import React,{useState,useRef,useEffect} from 'react';
import './NewTask.css';
import InputContainer from '../components/InputContainer.js';
import { IoToggleSharp } from "react-icons/io5";
import {v4 as uuidv4} from 'uuid';
function NewTask(props) {
  const [showContent, setShowContent] = useState(false);
  const toggle =(currentState)=>{
    const val = (currentState ===false)?true:false
    return setShowContent(val)
  }
  
  const taskNameInput= useRef(null);
  const startDateInput= useRef(null);
  const deadlineInput= useRef(null);
  const descriptionInput = useRef(null);

 
  
  const storeTask =(setTasks)=>{
    const name=taskNameInput.current.value;
    const startsFrom=startDateInput.current.value;
    const deadline=deadlineInput.current.value;
    const description =descriptionInput.current.value;
    setTasks(prevTasks=>{
      return [...prevTasks,{id:uuidv4(), name:name, startsFrom:startsFrom, deadline:deadline, description:description}]
    })
    

  }
    return (
        <form onSubmit={(e)=>{e.preventDefault(); storeTask(props.setTasks)}}>
        <div className="newtask-container">
          <h4 className="newtask-options-info">Basic</h4>
          <InputContainer title="Task Name" message="Some Error Message" status={"default"}>
            <input ref={taskNameInput} type="text" id="task-name"/>
            </InputContainer>
            <InputContainer title="Start Date" message="Some Error Message" status={"error"}>
            <input ref={startDateInput} type="date" id="start-date"/>
            </InputContainer>
            <InputContainer title="Deadline" message="Some Error Message" status={"valid"}>
            <input ref={deadlineInput} type="date" id="deadline"/>
            </InputContainer>
          <h4 className="newtask-options-info">Detailed</h4>
         
           <label className="toggle-switch-container" htmlFor="description" onClick={()=>{toggle(showContent)}}>Description
           <div className="toggle-icon-container"><IoToggleSharp className={`toggle-icon ${showContent?"on":""}`}/></div>
           </label>
          <div className={`toggle-content ${showContent?"show":""}`}>
            <textarea ref={descriptionInput} name="description" id="description" ></textarea>
            </div> 
           <label className="toggle-switch-container" htmlFor="subtasks">Subtasks
           <div className="toggle-icon-container"><IoToggleSharp className="toggle-icon"/></div></label>
           <div className="button-container">
           <button type="submit"className="btn-newtask create">Create!</button>
            <button className="btn-newtask cancel" onClick={props.onClose}>Cancel</button>
           </div>
            
        </div>
        </form>
    )
}

export default NewTask

