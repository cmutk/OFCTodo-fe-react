import React from 'react'
import './TaskCard.css'
import { MdExpandMore } from "react-icons/md";
function TaskCard({task,bgShadow}) {
    
    return (
        <li className={`task-card-li task-card box-shadow-${bgShadow}`}>
            <div className="task-card-compact">
                <div className="task-card-compact-info">
                <div className="compact-info-name">
                <p>{task.name}</p>
                </div>
                <div className="compact-info-detail">
                 <p>1d</p>
                 <MdExpandMore className="expand-icon"/>   
                </div>
                </div>
            </div>
            <div className="task-card-detailed">
             <div className="task-card-detailed-times">
             <p>{task.startsFrom}</p>
             <p>{task.deadline}</p>
             </div>   
            <div className="task-card-detailed-description">        
                <p>Description:</p>
                <p>{task.description}</p>
            </div>            
            </div>
        
    </li>
    )
}

export default TaskCard
