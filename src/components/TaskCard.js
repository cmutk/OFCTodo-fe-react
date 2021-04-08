import React from 'react'
import './TaskCard.css'
import {DaysUntilDeadlineToDisplay} from '../components/Utilities.js'
import useToggle from './useToggle.js'
import { MdExpandMore } from "react-icons/md";

function TaskCard({task,bgShadow}) {
    const daysUntilDeadline = DaysUntilDeadlineToDisplay(task.deadline);
    const [showContent,showContentActions]= useToggle(false)
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
            <div className="task-card-detailed-description">        
                <span>Description:</span>
                <p>{task.description}</p>
            </div>            
            </div>
        
    </li>
    )
}

export default TaskCard
