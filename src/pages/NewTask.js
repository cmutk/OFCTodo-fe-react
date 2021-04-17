import React,{useState,useRef} from 'react';
import './NewTask.css';
import InputContainer from '../components/InputContainer.js';
import AddTaskSteps from '../components/AddTaskSteps.js';
import ToggleSwitchContainer from '../components/ToggleSwitchContainer.js'
import {v4 as uuidv4} from 'uuid';
function NewTask(props) {
  console.log("NewTask Rendered")
  const _taskId =uuidv4();
  const taskNameInput= useRef(null);
  const startDateInput= useRef(null);
  const deadlineInput= useRef(null);
  const descriptionInput = useRef(null);
  const [taskSteps,setTaskSteps]=useState([]);

  const storeTask =(setTasks)=>{
    const name=taskNameInput.current.value;
    const startsFrom=startDateInput.current.value;
    const deadline=deadlineInput.current.value;
    const description =descriptionInput.current.value;
    const completed =false;
    const steps=taskSteps.filter(taskStep=>{return taskStep.title!==""});
    setTasks(prevTasks=>{
      return [...prevTasks,{
        id:_taskId,
        name:name,
        startsFrom:startsFrom,
        deadline:deadline,
        description:description,
        completed:completed,
        steps:steps
      },
        
      ]
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
            <ToggleSwitchContainer title="Description" labelFor="description">
              <textarea ref={descriptionInput} name="description" id="description" ></textarea>
            </ToggleSwitchContainer>
            <ToggleSwitchContainer title="Task Steps">
              <AddTaskSteps taskSteps={taskSteps} setTaskSteps={setTaskSteps}/>
            </ToggleSwitchContainer>
          
           <div className="button-container">
           <button type="submit"className="btn-newtask create">Create!</button>
            <button type="reset" className="btn-newtask cancel" onClick={props.onClose}>Cancel</button>
           </div>
            
        </div>
        </form>
    )
}

export default NewTask

