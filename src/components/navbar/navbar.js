import React from 'react';
import './navbar.css';
import logo from '../../assests/logo.png';
import { Link } from 'react-scroll';

const navItems = [
    { name: 'Home', to: 'intro' },
    { name: 'About', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' }
];

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
                {navItems.map(item => (
                    <Link
                        key={item.to}
                        className='desktopMenulist'
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className='desktopMenubtn'>
                    <img src="" alt="" className='desktopMenuimg' />
                    Contact Me
                </button>
            </Link>
        </nav>
    );
};

export default Navbar;
