import React from 'react'
function TaskCard({task}) {
    
    return (
        <li>
        <p>{task.name}</p>
        <p>{task.startsFrom}</p>
        <p>{task.deadline}</p>
        <p>{task.description}</p>
    </li>
    )
}

export default TaskCard
