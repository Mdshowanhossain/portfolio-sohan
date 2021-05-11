import React from 'react';
import './About.modules.css';
const About = () => {
    return (
        <div className="about">
            <div className="about-img">
                <img src="/profile.jpg" alt="" />
            </div>
            <div className="details">
                <h1 style={{ marginBottom: '7px', color: '#565454' }}>MOHAMMAD SOHAN</h1>
                <h3 style={{ marginBottom: '4px', color: '#565454' }}>
                    <img style={{ width: '20px' }} src="/call.png" />
                        +8801998110072
                    </h3>
                <p className="para">I am a highly motivated and progress-focused Web Development with a long-standing background in this industry. During my 5 months of experience as a front-end Developer,I have developed both the functional and aesthetic components of client websites.I believe I can make an immediate impact on your organization with my unique blend of skills and passion.</p>
                <button className="resume-btn">
                    <a style={{ color: 'white' }} href="https://drive.google.com/file/d/1H_U7qNBqMf0eG-ASUfWKimWB-qzwkbpt/view?usp=sharing" target="_blank" >
                        Download Resume
                        </a >
                </button>
            </div>
        </div>

    );
};

export default About;