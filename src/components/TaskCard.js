import React from 'react';
import './TaskCard.css';
import { DaysUntilDeadlineToDisplay } from '../components/Utilities.js';
import useToggle from './useToggle.js';
import {ACTIONS} from '../App.js'
import { MdExpandMore,MdAdd,MdDelete,MdCheck } from "react-icons/md";
import { GrCheckbox } from "react-icons/gr";

function TaskCard({task,bgShadow,dispatch}) {
    const daysUntilDeadline = DaysUntilDeadlineToDisplay(task.deadline);
    const [showContent,showContentActions]= useToggle(false);
    return (
        <li className={`task-card-li task-card box-shadow-${bgShadow}`}>
            <div className="task-card-compact" onClick={showContentActions.toggle}>
                <div className="task-card-compact-info">
                <div className="compact-info-name">
                <p>{task.name}</p>
                </div>
                <div className="compact-info-detail">
                 <p>{daysUntilDeadline}</p>
                 <MdExpandMore className={`expand-icon ${showContent?"on":""}`}/>   
                </div>
                </div>
            </div>
            <div className={`task-card-detailed ${showContent?"on":""}`}>
             <div className="task-card-detailed-times">
                 <div>
                     <span>Starts:</span>
                     <span>Ends:</span>
                 </div>
                 <div>
                     <span>{task.startsFrom}</span>
                     <span>{task.deadline}</span>
                </div>
             
             
             </div>   
            {task.description&&
            <div className="task-card-detailed-description">        
                <span>Description:</span>
                <p>{task.description}</p>
            </div>}

            <div className="task-card-detailed-task-steps">        
                <div className="card-task-steps-title">
                <span>Steps:</span>
                <p>{task.steps&&task.steps.length} Left</p>
                </div>
                <div className="card-task-steps-container">
                    <ul>{
                (task.steps)&&    
                task.steps.map((step)=>(
                    <li key={step.id} >
                        <div className={`card-task-step box-shadow-${bgShadow}`}>
                        <GrCheckbox className="card-task-step-icon"/>      
                        <span className="card-task-step-title">{step.title}</span>
                        </div>
                    </li>
                    
                )
                )
                
                }
                    </ul>
                </div>
            </div>                      
            <div className="task-card-detailed-controls">
                <button className="card-detailed-controls-button" type="button" onClick={()=>dispatch({type:ACTIONS.DELETE_TASK, payload:{id:task.id}})}><MdDelete/></button>
                <button className="card-detailed-controls-button" type="button"><MdAdd/></button>
                <button className="card-detailed-controls-button" type="button" onClick={()=>dispatch({type:ACTIONS.COMPLETE_TASK, payload:{id:task.id}})}><MdCheck/></button>
               
            </div>    
        </div>
            
    </li>
    )
}

export default TaskCard
