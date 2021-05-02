import React from 'react';
import './skills.css'
import fb from '../images/fb.png';

import bootstrap from '../icons/bootstrap.png';
import css3 from '../icons/css3.png';
import firebase from '../icons/firebase.png';
import github from '../icons/github.png';
import heroku from '../icons/heroku.png';
import html from '../icons/html.png';
import javascript from '../icons/javascript.png';
import lind from '../icons/lind.png';
import mongodb from '../icons/mongodb.png';
import mysql from '../icons/mysql.png';
import node from '../icons/node.png';
import npm from '../icons/npm.png';
import php from '../icons/php.png';
import react from '../icons/react.png';
import redux from '../icons/redux.png';
import tpsc from '../icons/tpsc.png';
import visual from '../icons/visual.png';
import exp from '../icons/exp.png';
import nextt from '../icons/nextt.png';
import mate from '../icons/mate.png';
import wdp from '../icons/wdp.png';




const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <h3><strong>Language</strong></h3>

                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={html}
                        alt="html"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={css3}
                        alt="css3"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={javascript}
                        alt="javascript"
                    />

                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={node}
                        alt="node"
                    />

                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={php}
                        alt="php"
                    />

                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={tpsc}
                        alt="tpsc"
                    />

                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={wdp}
                        alt="wdp"
                    />
                </div>
                <div>
                    <h3><strong>Framework</strong></h3>
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={exp}
                        alt="exp"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={nextt}
                        alt="next"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={mate}
                        alt="mate"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={bootstrap}
                        alt="bootstrap"
                    />
                </div>

                <div>
                    <h3><strong>Library</strong></h3>

                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={react}
                        alt="react"
                    />
                </div>

                <div>
                    <h3><strong>Database</strong></h3>
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={mongodb}
                        alt="mongodb"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={mysql}
                        alt="mysql"
                    />

                </div>

                <div>
                    <h3><strong>Tools</strong></h3>
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={github}
                        alt="github"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={heroku}
                        alt="heroku"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={firebase}
                        alt="firebase"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={npm}
                        alt="npm"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={visual}
                        alt="visual"
                    />
                    <img
                        style={{ width: '60px', margin: '10px' }}
                        src={redux}
                        alt="redux"
                    />
                </div>

            </div>
        </div>
    );
};

export default Skills;