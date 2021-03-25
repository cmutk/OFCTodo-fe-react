import React,{useState} from 'react'
import Modal from './Modal.js';
import Header from './Header.js';

function NewTask() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={()=>{setShow(true)}}>Show Modal</button>
      <Modal size="lg" onClose={()=>{setShow(false)}} show={show} >
        <Header headerOf="newtask"></Header>
      </Modal>
        </div>
    )
}

export default NewTask

