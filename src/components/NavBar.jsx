import React from 'react';

// styles
import '../styles/NavBar.css';

// icons
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {

    const handleOpenMenuBar = () => {
        const btnOpen = document.getElementById('btn-open-menu');
        const btnClose = document.getElementById('btn-close-menu');
        const list = document.getElementById('nav-list');

        btnOpen.style.animation = 'openNav 200ms forwards';
        setTimeout(() => {
            btnOpen.style.display = 'none';
        }, ['199'])
        setTimeout(() => {
            btnClose.style.display = 'flex';
            btnClose.style.animation = 'showCloseBtn 200ms forwards';
            list.style.display = 'flex';
        }, ['200'])
    }

    const handleCloseMenu = () => {
        const btnOpen = document.getElementById('btn-open-menu');
        const btnClose = document.getElementById('btn-close-menu');
        const list = document.getElementById('nav-list');

        btnClose.style.animation = 'hideCloseBtn 200ms forwards';
        setTimeout(() => {
            btnClose.style.display = 'none';
            list.style.display = 'none'
        }, ['199']);
        setTimeout(() => {
            btnOpen.style.display = 'flex';
            btnOpen.style.animation = 'showOpenNav 200ms forwards';
        }, ['200']);
    }

    return (
        <nav>
            <button className='btn-open-menu' id='btn-open-menu' onClick={() => handleOpenMenuBar()}><CgMenuRight /></button>
            <button className='btn-close-menu' id='btn-close-menu'
                onClick={() => { handleCloseMenu() }}
            ><AiOutlineClose /></button>
            <ul className='nav-list' id='nav-list'>
                <li><a href='#targetHome'>Home</a></li>
                <li><a href='#targetWhat'>What I Do</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#targetContact'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
