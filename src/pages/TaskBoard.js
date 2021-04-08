import React,{} from 'react';
import './TaskBoard.css';
import {CalculateTaskStatus} from '../components/Utilities.js';
import TaskContainer from '../components/TaskContainer.js';
function TaskBoard(props) {
console.log('TaskBoard Called!');
const allTasks = props.tasks;
 allTasks.forEach((task)=>{
    const taskStatus = CalculateTaskStatus(task);
    task.status = taskStatus;
})

    return (
        <section name="task-board">
            <div className="main-container">
                <div className="main-row">
                <TaskContainer tasks={allTasks.filter(task=>task.status==="completed")} containerFor="completed"></TaskContainer>
                <TaskContainer tasks={allTasks.filter(task=>task.status==="current")} containerFor="current"></TaskContainer>
                <TaskContainer tasks={allTasks.filter(task=>task.status==="urgent")} containerFor="urgent"></TaskContainer>
                <TaskContainer tasks={allTasks.filter(task=>task.status==="longterm")} containerFor="longterm"></TaskContainer>
                </div>
            </div>
        </section>
    )
}

export default TaskBoard
