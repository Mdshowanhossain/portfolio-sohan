import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>

            <section>
                <div className="container">
                    <form action="https://formsubmit.co/mohammadsohan.me@gmail.com" method="POST" id="my-form">
                        <div className="form-group">
                            <label for="firstName">Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>

                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label for="massage">Massage</label>
                            <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit">Submit</button>

                    </form>
                    <button className="resume">
                        <a href="https://drive.google.com/file/d/1S9KFjnmF7Cc1mK8NGYks_TyarGIXP8JK/view?usp=sharing" target="_blank" >
                            Download Resume
                        </a >
                    </button>

                </div>
                <div id="status"></div>
            </section>






            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29410.12099775403!2d89.50076565696355!3d22.86666254205085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9a56395fc673%3A0xe75ce7a4db53b5ee!2sDaulatpur%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1619913656015!5m2!1sen!2sbd"></iframe>

        </div>
    );
};

export default Contact;



