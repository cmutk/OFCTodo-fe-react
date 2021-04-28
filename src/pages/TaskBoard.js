import React,{useState,useEffect,useReducer} from 'react';
import './TaskBoard.css';
import NewTask from './NewTask.js';
import ModalLarge from '../components/ModalLarge.js';
import TaskContainer from '../components/TaskContainer.js';
import {CalculateTaskStatus,checkTaskStatusRange} from '../components/Utilities.js';
import {DragDropContext} from 'react-beautiful-dnd';

export const ACTIONS={
    ADD_TASK:"add-task",
    DELETE_TASK:"delete-task",
    CHANGE_TASK_STATUS_WITH:"change-task-status-with",
    CALCULATE_ALL_TASKS_STATUS:"calculate-all-tasks-status",
    REPLACE_TASKS_WITH_REORDERED:"replace-tasks-with-reordered",
  }

function reducer(tasks,action){
    switch(action.type){
      case ACTIONS.ADD_TASK:
      console.log(action.payload.task)
        return [...tasks,action.payload.task];

      case ACTIONS.DELETE_TASK:
        return tasks.filter((task)=>task.id!==action.payload.id);

      case ACTIONS.CHANGE_TASK_STATUS_WITH:
        return tasks.map((task)=>{
          if(task.id===action.payload.id){
            return {...task,status:action.payload.status};
          }
          return task;
      })

      case ACTIONS.CALCULATE_ALL_TASKS_STATUS:
        return tasks.map((task)=>{
            const taskStatus = CalculateTaskStatus(task);
            task.status = taskStatus;
            return task;
        })

      case ACTIONS.REPLACE_TASKS_WITH_REORDERED:
        const reordered=action.payload.reorderedTasks ;
        console.log("reordered here:",reordered);    
        return reordered;
      default:
        return tasks;
    }
  }

function TaskBoard({showModal,onClose}) {
    const LOCAL_STORAGE_KEY_TASKS = 'ofcourse.tasks';
    const tasksOnLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TASKS));
    const initialStateOfReducer =tasksOnLocalStorage||[];
    const [tasks,dispatch] = useReducer(reducer, initialStateOfReducer)
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY_TASKS, JSON.stringify(tasks))
    }, [tasks]);
    useEffect(()=>{dispatch({type:ACTIONS.CALCULATE_ALL_TASKS_STATUS});},[tasks.length]);

    console.log('TaskBoard Called!');
    console.log("AllTasks :",tasks);



const [cardOrders, updateCardOrders] = useState([]);
useEffect(()=>{
  
  const CONTAINER_NAMES=["completed","current","urgent","longterm"];
  updateCardOrders(
  ()=>{return CONTAINER_NAMES.map(containerName=>{
       return tasks.filter(task=>task.status===containerName)
      })
  
  }
)},[tasks])
const CONTAINER_INDICES ={completed:0,current:1,urgent:2,longterm:3};
const findContainerIndex=(name)=>{
  return CONTAINER_INDICES[`${name}`]
}
console.log("card orders here",cardOrders);
const reorderMultiple=({list,source,destination})=>{
  const result=Array.from(list);
  const sourceContainerIndex=findContainerIndex(source.droppableId);
  const destinationContainerIndex=findContainerIndex(destination.droppableId);
  const [removedFromSourceArr] =[...result][sourceContainerIndex].splice(source.index,1);
  result[destinationContainerIndex].splice(destination.index,0,removedFromSourceArr)
  return result;
}
function reorderAndSaveTasks({source,destination}){
  const multiList =[...cardOrders];
  const multipleResult=reorderMultiple({list:multiList,source:source,destination:destination})
  const flattenedResult=[].concat(...multipleResult)
  dispatch({type:ACTIONS.REPLACE_TASKS_WITH_REORDERED, payload:{reorderedTasks:flattenedResult}})
}
function applyTaskStatusChange(taskId,nextStatus){
  console.log("applyTaskStatusChange",taskId,nextStatus)
  dispatch({type:ACTIONS.CHANGE_TASK_STATUS_WITH, payload:{id:taskId,status:nextStatus}})
}

const isConfirmationRequired=(nextStatus)=>nextStatus==="current"?false:true;  
const isDateRelated =(nextStatus)=>nextStatus==="completed"?false:true;
function askUserPermission({prevStatus,nextStatus,taskId}){
console.log("isDateRelated",isDateRelated(nextStatus));
}
function handleTaskStatusChange({prevStatus,nextStatus,taskId}){
(!isConfirmationRequired(nextStatus))?applyTaskStatusChange(taskId,nextStatus):askUserPermission({prevStatus,nextStatus,taskId})


console.log("handleTaskStatusChangeHere:",isConfirmationRequired(nextStatus))
}
function handleDragEnd(result){
    const {source,destination,draggableId}=result;
    if(!destination) return;
    if(destination.droppableId===source.droppableId&&destination.index===source.index) return;
    if(destination.droppableId===source.droppableId) reorderAndSaveTasks({source,destination});
    else handleTaskStatusChange({prevStatus:source.droppableId,nextStatus:destination.droppableId,taskId:draggableId});

}
    return (
        <section name="task-board">
            <ModalLarge content={<NewTask onClose={onClose} dispatch={dispatch}/>} headerOf="newtask" title="New Task" show={showModal} onClose={onClose}/>
            <div className="main-container">
                <div className="main-row">
                <DragDropContext onDragEnd={handleDragEnd}>
                <TaskContainer dispatch={dispatch} tasks={cardOrders[0]} containerFor="completed"></TaskContainer>
                <TaskContainer dispatch={dispatch} tasks={cardOrders[1]} containerFor="current"></TaskContainer>
                <TaskContainer dispatch={dispatch} tasks={cardOrders[2]} containerFor="urgent"></TaskContainer>
                <TaskContainer dispatch={dispatch} tasks={cardOrders[3]} containerFor="longterm"></TaskContainer>
                </DragDropContext>
                </div>
            </div>
        </section>
    )
}

export default TaskBoard
