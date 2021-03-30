import React,{useState} from 'react';
import './NewTask.css';
import InputContainer from './InputContainer.js'
import { IoToggleSharp } from "react-icons/io5";
function NewTask(props) {
  const [showContent, setShowContent] = useState(false);
  const toggle =(currentState)=>{
    const val = (currentState ===false)?true:false
    return setShowContent(val)
    
  }
    return (
        <>
        <div className="newtask-container">
          <h4 className="newtask-options-info">Basic</h4>
          <InputContainer title="Task Name" message="Some Error Message" status={"default"}>
            <input type="text" id="task-name"/>
            </InputContainer>
            <InputContainer title="Start Date" message="Some Error Message" status={"error"}>
            <input type="date" id="start-date"/>
            </InputContainer>
            <InputContainer title="Deadline" message="Some Error Message" status={"valid"}>
            <input type="date" id="deadline"/>
            </InputContainer>
          <h4 className="newtask-options-info">Detailed</h4>
         
           <label className="toggle-switch-container" htmlFor="description" onClick={()=>{toggle(showContent)}}>Description
           <div className="toggle-icon-container"><IoToggleSharp className={`toggle-icon ${showContent?"on":""}`}/></div>
           </label>
          <div className={`toggle-content ${showContent?"show":""}`}><textarea name="description" id="description" ></textarea></div> 
           <label className="toggle-switch-container" htmlFor="subtasks">Subtasks
           <div className="toggle-icon-container"><IoToggleSharp className="toggle-icon"/></div></label>
           <div className="button-container">
           <button className="btn-newtask create">Create!</button>
            <button className="btn-newtask cancel" onClick={props.onClose}>Cancel</button>
           </div>
            
        </div>
        </>
    )
}

export default NewTask

