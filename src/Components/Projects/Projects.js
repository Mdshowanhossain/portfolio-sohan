import React from 'react';

import './projects.css';
import './projects.modules.css';

const Works = () => {
    return (

        <div className="grid">
            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/card.png" alt="Maldives" />
                    <div className="card-content">
                        <h1 className="card-header">HOME SERVICE</h1>
                        <p className="card-text">
                            This is <strong>Home-Service</strong>
                              Recently i make this website. Here i am use <strong>Html, Css, firebase, Bootstrap, Material Ui React,  React-Router-Dom & online pictures.</strong>
                              The best features is google authentication.
                        </p>
                        <a className="card-btn" href="https://home-service0.netlify.app/" target="_blank">
                            Live Link
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Home-Service" target="_blank">
                            Code Link
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img style={{ textAlign: 'center' }} className="card-img" src="./img/grp.png" alt="Rome" />
                    <div className="card-content">
                        <h1 className="card-header">DOCTORS PORTAL</h1>
                        <p className="card-text">
                            This is <strong>Doctors-Portal</strong>
                              Recently i make this website. Here i am use <strong>Html, Css, firebase, Bootstrap, Material Ui React,  React-Router-Dom & online pictures.</strong>
                              The best features is google authentication.
                        </p>
                        <a className="card-btn" href="https://doctors-portal-with-admin.netlify.app/" target="_blank">
                            Live Link
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Doctors-Portal-admin-page" target="_blank">
                            Code Link
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/burz.png" alt="Maldives" />
                    <div className="card-content">
                        <h1 className="card-header">BURZ AL ARAB HOTEL</h1>
                        <p className="card-text">
                            This is <strong>Burz-Al-Arab-Hotel.</strong>
                              Recently i make this website. Here i am use <strong>Html, Css, Firebase, Bootstrap, React, React-Router-Dom.</strong> with authentication.
                        </p>
                        <a className="card-btn" href="https://burz-al-arab-with-auth.netlify.app/" target="_blank">
                            Live Link
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Burz-al-arab-hotel" target="_blank">
                            Code Link
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/card2.png" alt="Maldives" />
                    <div className="card-content">
                        <h1 className="card-header">DISNEP</h1>
                        <p className="card-text">
                            This is a <strong> Disney Studios </strong>complex.
                              Recently i <strong>Clone</strong> this website home page And Now i am working on This website. Here i am use <strong>Html, Css,  React, React Styled Components, npm slick, React-Router-Dom.</strong>
                        </p>
                        <a className="card-btn" href="https://disney-clone0.netlify.app/" target="_blank">
                            Live Link
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Disney-clone" target="_blank">
                            Code Link
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/net.png" alt="netflix" />
                    <div className="card-content">
                        <h1 className="card-header">NETFLIX</h1>
                        <p className="card-text">
                            This is <strong>Netflix Home Page</strong>
                              Recently i make this website Home-Page and Now i am working on this website.Here i am use <strong>React, Css, to load data use Axios, and the TMDB API </strong>
                        </p>

                        <a className="card-btn" href="https://netflix-homepage.netlify.app/" target="_blank">
                            Live Link
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Netflix-clone-home-page" target="_blank">
                            Code Link
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Works;


