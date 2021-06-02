import React,{useEffect} from 'react'
import './Modal.css'
function Modal(props) {
    const closeOnEscapeKeyDown=(e)=>{
        if((e.charCode||e.keyCode)===27)
        props.onClose();
    }
    useEffect(()=>{
        document.body.addEventListener('keydown',closeOnEscapeKeyDown)
        return function cleanUp(){
            document.body.removeEventListener('keydown',closeOnEscapeKeyDown)
        }
    })
    
    return (
        <aside>
            <div className={`overlay ${props.show ?"show":""}`} onClick={props.onClose}>&nbsp;</div>
            <div className={`modal ${props.size} ${props.show ?"show":""}`} onClick={(e)=>e.stopPropagation()}>
               {props.children}
            </div>
        </aside>
    )
}

export default Modal
