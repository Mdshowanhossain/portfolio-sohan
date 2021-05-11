import React from 'react';
import './skills.css';
import javascript from '../../Components/icons/javascript.png';
import php from '../../Components/icons/php.png';


const Skills = () => {
    return (

        <div className="skills">
            <div>
                <h2 style={{color: '#565454'}} >PROGRAMMING LANGUAGE </h2><br /><br />
                <div className="skills-info">
                    <span>JAVASCRIPT</span><span>PHP</span>
                    <div className="skill-img">
                        <p>Learning new things is one of the skill developing hobbies and I always enjoy learning new things. For this reason I have been learning web design and development for a long time and I have built 10+ projects.To build projects I have to know a lot of new things and I am developing my skill continuously.Please See my skill.(Thank You).</p>

                    </div>
                </div>
            </div><br />

            <div>
                <h2 style={{color: '#565454'}} >WEB </h2><br /><br />
                <div className="skills-detail">
                    <h3 style={{ marginBottom: '3px', color: '#565454' }}>Frontend:</h3><br />
                    <span>Html</span><span>Css</span><span>Bootstrap</span><span>Material UI</span><br /><br /><br /><span>Es6</span><span>React</span><span>Redux</span><br /><br />
                    <div className="skills-detail">
                        <h3 style={{ marginBottom: '3px' , color: '#565454' }}>Backend:</h3><br />
                        <span>Node JS</span><span>Express JS</span><span>MongoDB</span><br /><br /><br /><span>Mongoose</span><br /><br />
                    </div>
                </div>

                <div className="skills-detail">
                    <div className="skills-detail">
                        <h3 style={{ marginBottom: '3px', color: '#565454' }}>Deploy:</h3><br />
                        <span>Firebase</span><span>Heroku</span><span>Netlify</span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Skills;