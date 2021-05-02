import React from 'react'
import Modal from './Modal.js'
import './ConfirmBox.css'
function ConfirmBox(props) {
    return (
        <Modal size="sm" onClose={props.onCancel} show={props.show}>
            <div className="confirm-box-container">
                <div className="message-box">
                {props.children}
                </div>
                <div className="confirm-box-buttons">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button onClick={props.onConfirm}>Confirm</button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmBox
