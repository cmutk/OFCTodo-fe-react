import React,{} from 'react';
import './TaskBoard.css';

import TaskContainer from '../components/TaskContainer.js';
function TaskBoard({tasks,dispatch}) {
console.log('TaskBoard Called!');
console.log("AllTasks :",tasks)



    return (
        <section name="task-board">
            <div className="main-container">
                <div className="main-row">
                <TaskContainer dispatch={dispatch} tasks={tasks.filter(task=>task.status==="completed")} containerFor="completed"></TaskContainer>
                <TaskContainer dispatch={dispatch} tasks={tasks.filter(task=>task.status==="current")} containerFor="current"></TaskContainer>
                <TaskContainer dispatch={dispatch} tasks={tasks.filter(task=>task.status==="urgent")} containerFor="urgent"></TaskContainer>
                <TaskContainer dispatch={dispatch} tasks={tasks.filter(task=>task.status==="longterm")} containerFor="longterm"></TaskContainer>
                </div>
            </div>
        </section>
    )
}

export default TaskBoard
