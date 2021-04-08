import React from 'react';
import './TaskSteps.css';
import { MdAddCircle } from "react-icons/md";
function TaskSteps() {
    return (
        <ul>
            <li>
            <div className="task-step-container">
            <button><MdAddCircle/></button>
            <textarea name="task-steps" id="task-steps" className="task-step-textarea new-task"></textarea>
            </div>
            </li>
        </ul>
        
    )
}

export default TaskSteps
