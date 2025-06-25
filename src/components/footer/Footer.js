import React from 'react';
import './Footer.css'
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>Kanhainya Agrawal</a>
            <ul className={"permalinks"}>
                <li><a href={"#"} >Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experiences"}>Experiences</a></li>
                <li><a href={"#services"}>Services</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
                {/* <li><a href={"#testimonials"}>Testimonials</a></li> */}
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://www.facebook.com/thekanhaiyaagrawal/"} target={"_blank"} rel = "noreferrer"><FaFacebook /></a>
                <a href={"https://instagram.com"} target={"_blank"} rel = "noreferrer"><FiInstagram /></a>
                <a href={"https://x.com/kanhaiyaaggar12"} target={"_blank"} rel = "noreferrer"><BsTwitterX  /></a>
            </div>

            <div className={"footer__copyright"}>
                <small>&copy; EGATOR Tutorials. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer