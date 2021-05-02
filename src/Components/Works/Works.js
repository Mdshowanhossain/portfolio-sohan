import React from 'react';
import twt from '../images/twt.png';
import card from '../images/card.png';
import card2 from '../images/card2.png';
import burz from '../images/burz.png';
import grp from '../images/grp.png';


import './works.css';

const Works = () => {
    return (
        <main className="works">
            <h1>Projects</h1>
            <h2 className="project-detail">Recently I Complete Various Projects</h2>

            <a href="https://home-service-c938c.web.app/" target="_blank">
                <img
                    src={card}
                    alt="card"
                    home
                />
            </a>

            <a href="https://burz-al-arab-hotel.netlify.app/" target="_blank">
                <img
                    src={burz}
                    alt="burz"
                />
            </a>

            <a href="https://disnep-clone.netlify.app/" target="_blank">
                <img
                    src={card2}
                    alt="card2"
                />
            </a>

            <a href="https://doctors-portal-client.netlify.app/" target="_blank">
                <img
                    src={grp}
                    alt="grp"
                />
            </a>


        </main>
    );
};

export default Works;