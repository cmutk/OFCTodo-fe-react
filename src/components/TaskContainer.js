import React from 'react';
import './TaskContainer.css';
import TaskCard from './TaskCard.js';
function TaskContainer(props) {
    const title = props.containerFor.charAt(0).toUpperCase() + props.containerFor.slice(1)+" Tasks";
    console.log(props.tasks)
    return (
        <div className="generic-column">
            <h4 className={`task-container-title color-${props.containerFor}`}>{title}</h4>
            <div className="task-container">
                <ul>
                {
                (props.tasks)&&    
                props.tasks.map((task)=>(
                    <TaskCard key={task.id} task={task}/>
                )
                )
                
                }
                </ul>
            </div>
        </div>
    )
}

export default TaskContainer