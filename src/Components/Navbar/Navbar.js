import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import cross from '../images/cross.png';
import right from '../images/right.png';
import logo from '../images/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0)

    const trackScreenWidth = () => {
        const width = window.innerWidth
        setScreenWidth(width)
        if (width > 800) {
            setOpen(true);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth)
    }, [])

    return (
        <nav className="navbar">

            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="git" />
                    </Link>
                </div>

                <div className="list-wrapper">
                    <img
                        src={right}
                        alt="Menu bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open)
                        }}
                    />
                    <img
                        src={cross}
                        alt="cross"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open)
                        }}
                    />

                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/skill">Skills</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contact</Link>
                        </li>
                        <li>
                            <Link to="/work">Works</Link>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;