import React from 'react'
import './InputContainer.css'
function InputContainer(props) {
    React.Children.only(props.children)
    return (
        <div className={`input-container ${props.status==="default"|| undefined ?"":props.status}`}>
        <label htmlFor={props.children.props.id}> {props.title}</label>
          {props.children}
          <p className="message">{props.message}</p>
      </div>
    )
}

export default InputContainer
