import React,{} from 'react';
import './TaskContainer.css';
import TaskCard from './TaskCard.js';
import {Droppable,Draggable} from 'react-beautiful-dnd';
function TaskContainer(props) {
    const title = props.containerFor.charAt(0).toUpperCase() + props.containerFor.slice(1)+" Tasks";
    console.log("TASK CONTAINER HERE")

    return (
        
        <div className="generic-column">
            <h4 className={`task-container-title color-${props.containerFor}`}>{title}</h4>
            <div className={`task-container scrollbar-thumb-${props.containerFor}`}>
              
                    <Droppable droppableId={props.containerFor}>

                    {(provided)=>(
                         <ul {...provided.droppableProps} ref={provided.innerRef}>
                             
                         {
                         (props.tasks)&&    
                         props.tasks.map((task,index)=>(
                            <Draggable key={task.id} draggableId={task.id} index={index}>{(provided)=>(
                                <TaskCard provided={provided} dispatch={props.dispatch} task={task} bgShadow={props.containerFor}/> 
                                )}
                              </Draggable>
                         )
                         )
                         
                         }
                         {provided.placeholder}
                         </ul>
                    )
                       
                    }
                
                </Droppable>
              
            </div>
        </div>
    
    )
}

export default TaskContainer
