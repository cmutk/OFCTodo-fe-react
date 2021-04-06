import React,{} from 'react';
import './TaskBoard.css';
import TaskContainer from '../components/TaskContainer.js';
function TaskBoard(props) {
console.log('TaskBoard Called!')

    return (
        <section name="task-board">
            <div className="main-container">
                <div className="main-row">
                <TaskContainer containerFor="completed"></TaskContainer>
                <TaskContainer tasks={props.tasks} containerFor="current"></TaskContainer>
                <TaskContainer containerFor="urgent"></TaskContainer>
                <TaskContainer containerFor="longterm"></TaskContainer>
                </div>
            </div>
        </section>
    )
}

export default TaskBoard
