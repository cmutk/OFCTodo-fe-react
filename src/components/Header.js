import React from 'react'
import './Header.css'
import { MdSearch, MdArrowBack } from "react-icons/md";

const Header = () => {
    return (
        <header>
            <nav className="navbar-header">
            <button className="navbar-back-button">
              <MdArrowBack style={{color:'#ffffff', height:'100%',fontSize:"24px" }}/>
            </button>
            <button className="navbar-logo">
              OFCourse!
            </button>
            <div className="search-bar-container">
              <input
                className="search-bar-input"
                type="search"
                placeholder=" Search"
              />
              <button className="search-bar-submit-button">
               <MdSearch style={{ height:'100%', fontSize:'20px' }}/>
              </button>
            </div>
            <div className="navbar-container">
              <button
                className="navbar-header-newtask"
                data-open-modal-lg="new-task"
              >
                New Task !
              </button>
 
            </div>
            </nav>
        </header>
    )
}

export default Header
