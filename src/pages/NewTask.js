import React,{useState,useEffect,useRef} from 'react';
import './NewTask.css';
import InputContainer from '../components/InputContainer.js';
import {validateTaskName,validateDates} from '../components/Validation.js'
import AddTaskSteps from '../components/AddTaskSteps.js';
import ToggleSwitchContainer from '../components/ToggleSwitchContainer.js'
import {v4 as uuidv4} from 'uuid';
import {ACTIONS} from './TaskBoard.js'
function NewTask({onClose,dispatch}) {
  console.log("NewTask Rendered")
  const todayStr = new Date().toISOString().substr(0,10);
  
  const _taskId =uuidv4();
  const taskNameInput= useRef(null);
  const descriptionInput = useRef(null);

  const [dateInputValues, setDateInputValues] = useState({
    startDate:todayStr,
    deadline:todayStr,
  })
 
  const [dateValidationResults, setDateValidationResults] = useState()
  const [taskNameValidationResult, setTaskNameValidationResult]=useState({})

  const handleDateInputs=(ev)=>{
    setDateInputValues({...dateInputValues,
      [ev.target.id]:ev.target.value
      });
  }

  const isFirstRun = useRef(true);
    useEffect(() => {
      (isFirstRun.current)?isFirstRun.current=false:setDateValidationResults(validateDates(dateInputValues));   
  }, [dateInputValues])

  const handleOnchange=()=> {
      setTaskNameValidationResult(validateTaskName(taskNameInput.current.value))
  }
  const isAllValid =()=>{
    const{startDate,deadline}=validateDates(dateInputValues);
    const statusArr =[taskNameValidationResult.status,startDate.status,deadline.status]
    return statusArr.every(item=>item==="valid");
  }
  const handleFormSubmit=(ev)=>{
    ev.preventDefault();
     isAllValid()&&dispatch({type:ACTIONS.ADD_TASK,payload:{task:createTask()}});
  }

  const [taskSteps,setTaskSteps]=useState([]);
  

  const createTask = ()=>{
    const name = taskNameInput.current.value;
    const startsFrom = dateInputValues.startDate;
    const deadline= dateInputValues.deadline;
    const description =descriptionInput.current.value;
    const steps=taskSteps.filter(taskStep=>{return taskStep.title!==""});
    return {
      id:_taskId,
      name:name,
      startsFrom:startsFrom,
      deadline:deadline,
      description:description,
      steps:steps
    }
  }
  
    return (
        <form onSubmit={handleFormSubmit}>
        <div className="newtask-container">
          <h4 className="newtask-options-info">Basic</h4>
          <InputContainer title="Task Name" message={taskNameValidationResult.message} status={taskNameValidationResult.status}>
            <input type="text" id="taskName" ref={taskNameInput} onChange={handleOnchange}/>
            </InputContainer>
            <InputContainer title="Start Date" message={dateValidationResults&&dateValidationResults.startDate.message} status={dateValidationResults&&dateValidationResults.startDate.status}>
            <input type="date" id="startDate" value={dateInputValues.startDate} onChange={handleDateInputs}/>
            </InputContainer>
            <InputContainer title="Deadline" message={dateValidationResults&&dateValidationResults.deadline.message} status={dateValidationResults&&dateValidationResults.deadline.status}>
            <input type="date" id="deadline" value={dateInputValues.deadline} onChange={handleDateInputs}/>
            </InputContainer>
          <h4 className="newtask-options-info">Detailed</h4>
            <ToggleSwitchContainer title="Description" labelFor="description">
              <textarea name="description" ref={descriptionInput} id="description" onChange={handleOnchange} ></textarea>
            </ToggleSwitchContainer>
            <ToggleSwitchContainer title="Task Steps">
              <AddTaskSteps taskSteps={taskSteps} setTaskSteps={setTaskSteps}/>
            </ToggleSwitchContainer>
          
           <div className="button-container">
           <button type="submit"className="btn-newtask create">Create!</button>
            <button type="reset" className="btn-newtask cancel" onClick={onClose}>Cancel</button>
           </div>
            
        </div>
        </form>
    )
}

export default NewTask

