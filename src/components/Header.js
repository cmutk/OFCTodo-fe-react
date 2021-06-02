import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <header className={`bg-color-${props.headerOf} box-shadow-${props.headerOf}`}>{props.children}</header>
    )
}

export default Header
