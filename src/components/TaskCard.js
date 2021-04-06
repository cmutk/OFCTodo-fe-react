import React from 'react'
import './TaskCard.css'
import {DaysUntilDeadlineToDisplay} from '../components/Utilities.js'
import { MdExpandMore } from "react-icons/md";
function TaskCard({task,bgShadow}) {
    // console.log("Days Until Deadline:", DaysUntilDeadlineToDisplay(task.deadline))
    const daysUntilDeadline = DaysUntilDeadlineToDisplay(task.deadline);
    return (
        <li className={`task-card-li task-card box-shadow-${bgShadow}`}>
            <div className="task-card-compact">
                <div className="task-card-compact-info">
                <div className="compact-info-name">
                <p>{task.name}</p>
                </div>
                <div className="compact-info-detail">
                 <p>{daysUntilDeadline}</p>
                 <MdExpandMore className="expand-icon"/>   
                </div>
                </div>
            </div>
            <div className="task-card-detailed">
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
