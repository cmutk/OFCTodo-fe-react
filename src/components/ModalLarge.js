import React from 'react'
import './ModalLarge.css'
import Modal from './Modal.js';
import Header from './Header.js';
import { MdClose,MdExpandMore } from "react-icons/md"
function ModalLarge(props) {
    const HasIcon =(props)=>{
        return props.hasIcon ===true?<MdExpandMore className="expand-icon"/>:null
    } 
    return (
    <>
      <Modal size="lg" onClose={props.onClose} show={props.show} >
        <Header headerOf={props.headerOf}>
          <div className="header-container">
          <div className="header-title-container">
          <h4>{props.title}</h4>
          <HasIcon hasIcon={props.hasIcon}/>
          </div>
          <button className="close-button" onClick={props.onClose}>
            <MdClose/>
          </button>
          </div> 
        </Header>
        {props.content}
      </Modal>
    </>
        
    )
}

export default ModalLarge
