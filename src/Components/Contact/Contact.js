import React from 'react';
import './Contact.css';

const Contact = () => {
    return (

        <section className="contact">
            <div id="status">
                <img style={{ height: '100%', width: '100%' }} src="/shake.svg" alt="" />
            </div>
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
            </div>

        </section>

    );
};

export default Contact;



