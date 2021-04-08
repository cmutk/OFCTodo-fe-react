import React from 'react';
import './ToggleSwitchContainer.css';
import useToggle from '../components/useToggle.js';
import { IoToggleSharp } from "react-icons/io5";

function ToggleSwitchContainer(props) {
    const[showContent,showContentActions]=useToggle(false)
    return (
        <>
           <label className="toggle-switch-container" htmlFor={props.labelFor} onClick={showContentActions.toggle}>{props.title}
           <div className="toggle-icon-container"><IoToggleSharp className={`toggle-icon ${showContent?"on":""}`}/></div></label>
           <div className={`toggle-content ${showContent?"show":""}`}>
            {props.children}
            </div>   
        </>
    )
}

export default ToggleSwitchContainer
