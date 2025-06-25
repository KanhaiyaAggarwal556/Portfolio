import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Socials = () => {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/kanhaiya-agrawal-957930231/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin /></a>
            <a href={"https://github.com/KanhaiyaAggarwal556"} target={"_blank"} rel={"noreferrer"}><FaGithub /></a>
            <a href={"https://leetcode.com/u/kanhaiya_agrawal/"} target={"_blank"} rel={"noreferrer"}><SiLeetcode  /></a>
        </div>
    )
}

export default Socials