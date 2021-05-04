import React from 'react';

import './works.css';
import './work.modules.css';

const Works = () => {
    return (

        <div className="grid">
            <div className="grid-item">
                <div className="card">
                    <img style={{ textAlign: 'center' }} className="card-img" src="./img/grp.png" alt="Rome" />
                    <div className="card-content">
                        <h1 className="card-header">DOCTORS PORTAL</h1>
                        <p className="card-text">
                            This is a <strong>Doctors Portal</strong> Web Site With Appointment Page. Here i am use <strong>Html, Css, Bootstrap, React, React-Router-Dom.</strong>

                        </p>
                        <a className="card-btn" href="https://doctors-portal-home-page.netlify.app/" target="_blank">
                            Live Link<span>&rarr;</span>
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Doctors-Portal-Home-Page" target="_blank">
                            Code Link<span>&rarr;</span>
                        </a>

                    </div>
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/card2.png" alt="Maldives" />
                    <div className="card-content">
                        <h1 className="card-header">DISNEY</h1>
                        <p className="card-text">
                            <strong>This is a Disney Studios complex.</strong>
                              Recently i <strong>Clone</strong> this website And Now i am working on in This website. Here i am use <strong>Html, Css,  React,React Styled Components, npm slick, React-Router-Dom.</strong>
                        </p>
                        <a className="card-btn" href="https://diney-clone.netlify.app/" target="_blank">
                            Live Link<span>&rarr;</span>
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Disney-clone" target="_blank">
                            Code Link<span>&rarr;</span>
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
                            <strong>This is Burz-Al-Arab-Hotel.</strong>
                              Recently i make this website. Here i am use <strong>Html, Css, Bootstrap, React,  React-Router-Dom, Firebase.</strong>
                        </p>
                        <a className="card-btn" href="https://burz-al-arab-hotel.netlify.app/" target="_blank">
                            Live Link<span>&rarr;</span>
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/burj-al-arab-after-auth" target="_blank">
                            Code Link<span>&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/card.png" alt="Maldives" />
                    <div className="card-content">
                        <h1 className="card-header">HOME SERVICE</h1>
                        <p className="card-text">
                            <strong>This is Home-Service</strong>
                              Recently i make this website. Here i am use <strong>Html, Css, Bootstrap, Material Ui React,  React-Router-Dom.</strong>
                        </p>

                        <a className="card-btn" href="https://home-service-c938c.web.app/" target="_blank">
                            Live Link<span>&rarr;</span>
                        </a>
                        <a style={{ float: 'right' }} className="card-btn" href="https://github.com/Mdshowanhossain/Home-Service" target="_blank">
                            Code Link<span>&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Works;