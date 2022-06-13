import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7506cyx', 'template_q4bzrb9', form.current, 'jXBPt0vOR1KYGadrQ')
            .then((result) => {
                console.log('success');
            }, (error) => {
                console.log('error');
            });

        e.target.reset();

    };

    return (
        <div id='contactme' className='mb-10'>
            <h1 className='text-5xl font-semibold mt-20 italic'>Contact Me</h1>
            <p className='border-b-2 m-5'></p>
            <form ref={form} onSubmit={() => { sendEmail() }}>
                <label>Name : </label>
                <input className='text-white m-2 input input-bordered border-4 w-2/5' type="text" name="name" placeholder='Enter Your Name' /><br />
                <label>Email : </label>
                <input className='text-white m-2 input input-bordered border-4 w-2/5' type="email" name="email" placeholder='Enter Your Email' /><br />
                <label>Subject:</label>
                <input className='text-white m-2 input input-bordered border-4 w-2/5' type="text" name="subject" placeholder='Your Mail Subject' /><br />
                <label className='inline '>Message : </label>
                <textarea className='text-white m-2 input input-bordered border-4 w-2/5 h-40' name="message" placeholder='Your Message' /><br />
                <input className='btn btn-primary' type="submit" value="Send" />
            </form>

        </div>
    );
};

export default ContactMe;