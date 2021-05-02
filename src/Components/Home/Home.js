import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am Mohammad</p>
                    <p>Sohan</p>
                    <p>Web Developer</p>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={profile}
                    alt="person picture"
                />
            </div>
        </div>
    );
};

export default Home;