import React from 'react';
import './Footer.css';
import twt from '../images/twt.png';
import fb from '../images/fb.png';
import git from '../images/git.png';
import gmail from '../images/gmail.png';
import wht from '../images/wht.png';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.facebook.com/profile.php?id=100059117229160" target="_blank">
                <img
                    src={fb}
                    alt="facebook"
                />
            </a>
            <a href="https://twitter.com/0aU2y0vTnjvrR5x?s=07&fbclid=IwAR3Q00MWlDzGghFYge3qaCsfOFxTD-hq5ZkgOJlpfpDNooTvBjiu04FGW-Q" target="_blank">
                <img
                    src={twt}
                    alt="Twitter"
                />
            </a>
            <a href="/contacts">
                <img
                    src={gmail}
                    alt="Email"
                />
            </a>
            <a href="https://wa.me/+8801998110072" target="_blank">
                <img
                    src={wht}
                    alt="WhatsApp"
                />
            </a>
            <a href="https://github.com/Mdshowanhossain" target="_blank">
                <img
                    src={git}
                    alt="git hub"
                />
            </a>
        </footer>
    );
};

export default Footer;