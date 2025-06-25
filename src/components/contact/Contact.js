import React, {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {IoLogoWhatsapp} from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if(e.target.email.value === '' || !isValidEmail(e.target.email.value)) {
            alert('Please enter a valid email address');
            return;
        }
        emailjs.sendForm('service_j5r50vr', 'template_bo7kase', form.current, 'KpKE_m_az_TRrASnl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    return (
        <section id={"contact"}>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className={"container contact__container"}>
                <div className={"contact__options"}>
                    <article className={"contact__option"}>
                        <MdOutlineEmail className={"contact__option-icon"}/>
                        <h4>Email</h4>
                        <h5>kanhaiaggarwal@gmail.com</h5>
                        <a href={"mailto:kanhaiaggarwal@gmail.com"} target={'_blank'} rel = "noreferrer">Send a Message</a>
                    </article>
                    <article className={"contact__option"}>
                        <RiMessengerLine className={"contact__option-icon"}/>
                        <h4>Messenger</h4>
                        <h5>kanhaiya_tutorial</h5>
                        <a href={"https://m.me/thekanhaiyaagrawal"} target={'_blank'} rel = "noreferrer">Send a Message</a>
                    </article>
                    <article className={"contact__option"}>
                        <IoLogoWhatsapp className={"contact__option-icon"}/>
                        <h4>Whatsapp</h4>
                        <h5>+91 7877080746</h5>
                        <a href={"https://wa.me/917877080746?text=Hello%20there"} target={'_blank'} rel = "noreferrer">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type={"text"} name={"name"} placeholder={"Your Full name"} required/>
                    <input type={"email"} name={"email"} placeholder={"Your Email"} required/>
                    <textarea name={"message"} placeholder={"Your Message"} rows={"7"} required></textarea>
                    <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact