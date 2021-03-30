import React,{} from 'react';
import TaskList from '../components/TaskList.js'

function TaskBoard(props) {
console.log('TaskBoard Called!')
    return (
        <div>
            <TaskList tasks={props.tasks}/>
        </div>
    )
}

export default TaskBoard
