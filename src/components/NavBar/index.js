import React from 'react'
import pulsar from './JS/NavBarelement'
import ArmarMenu from './JS/ArmarMenu'
import './css/Menu.css'
const navBar = () => {
    return (
        <div className='container'>
            <input type='checkbox' id='btn-menu'></input>
            <label htmlFor='btn-menu' className='img-menu' onClick= {()=>{pulsar()}}><img src='http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png' alt='menu'/></label>
            <nav className='navbar navbar-light bg-light'>
			  <ul className='menu'>
			  	{ArmarMenu()}         
			  </ul>
			</nav>
        </div>
    )
}

export default navBar
