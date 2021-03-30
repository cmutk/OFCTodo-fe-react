import React from 'react'

function TaskList({tasks}) {
    console.log('TaskList Called')
    return (
        <div>
            <ul>{
                tasks.map((task)=>(
                    <li key={task.id}>
                    <p>{task.name}</p>
                    <p>{task.startsFrom}</p>
                    <p>{task.deadline}</p>
                    <p>{task.description}</p>
                </li>
                )
                )
                }
                
            </ul>
        </div>
    )
}

export default TaskList
