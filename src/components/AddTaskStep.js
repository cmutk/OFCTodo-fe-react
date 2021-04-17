import React,{useState,useRef,useEffect} from 'react'
import { MdAddCircle,MdEdit } from "react-icons/md";
function TaskStep({taskStep,idx,onInputChange}) {
    console.log("TASK STEP RENDERED!")
    const [isFocused,setIsFocused]=useState(true);
    const TaskStepButton = ({isAddIcon}) =>{
        return <button>{isAddIcon?<MdAddCircle/>:<MdEdit/>}</button>
      }
     const ref =useRef(null);
     useEffect(() => {if(ref.current){ref.current.focus()}}, []) 
    return (
        <>
             <div className="task-step-container">
                <TaskStepButton isAddIcon={isFocused}/>
                <textarea name="task-steps" 
                id={`task-steps-${idx}`}
                ref={ref}
                className="task-step-textarea new-task" 
                title="title"
                defaultValue={taskStep.value}
                onFocus={()=>setIsFocused(true)}
                onBlur={(e)=>{setIsFocused(false); onInputChange(e,idx);} } ></textarea>
                </div>
        </>
    )
}

export default TaskStep
