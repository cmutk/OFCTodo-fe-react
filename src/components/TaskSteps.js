import React,{useEffect} from 'react';
import './TaskSteps.css';

import TaskStep from './TaskStep.js'
function TaskSteps({taskSteps,setTaskSteps}) {
    console.log("TASK STEPS RENDERED!")
    const allTitlesFilled =[...taskSteps].every(taskStep=>{
                return taskStep.title.trim().length>0
            }
            );
    useEffect(() => {
        (taskSteps.length===0 || allTitlesFilled)&&setTaskSteps([...taskSteps,{id:undefined, title:"",completed:false}])
    })
    function simulateOnInputChange(ev,index){
        const {title,value}=ev.target;
        const prevVal =[...taskSteps][index][title]; 
        const list=[...taskSteps];
        list[index][title]=value;
        list[index].id=index;
        const nextVal =list[index][title];    
        const notEqual=prevVal!==nextVal;
        notEqual&&setTaskSteps(list);
    }
    
    
    return (
        <ul>{taskSteps.map((taskStep,idx)=>
            {
                return (<li key={idx}>
                    <TaskStep onInputChange={(e)=>simulateOnInputChange(e,idx)}taskStep={taskStep} idx={idx}/>
                </li>)
            }) } </ul>
        
    )
}

export default TaskSteps