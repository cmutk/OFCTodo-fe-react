import React from 'react'
import './Header.css'
import {useHistory , Link} from "react-router-dom"
import { MdSearch, MdArrowBack } from "react-icons/md";

const BackButton =({className})=>{
  const styleName=className;
  const history = useHistory();
  return <button type="button" onClick={()=>{history.goBack()}  } {...(styleName?{className:styleName}:{})}><MdArrowBack style={{color:'#ffffff', height:'100%',fontSize:"24px" }}/></button>
}

const HeaderLink = ({page,className,text,icon}) =>{
const title = text?text: page.charAt(0).toUpperCase() + page.slice(1);
const symbol = icon?icon:title; 
const pageToRoute = (page ==="home")? "":page;
const styleName= className;
  return <Link to={`/${pageToRoute}`} {...(styleName?{className:styleName}:{})}>{symbol}</Link>
}

const Header = () => {
    return (
        <header>
            <nav>
            <BackButton className="navbar-back-button"/>
            <HeaderLink page ="home" className ="navbar-logo" text="OFCourse!"/>
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
              <HeaderLink page="login" className="navbar-animation" />
              <HeaderLink page="sign-up" className="navbar-animation" />
              <button
                className="navbar-animation"
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
