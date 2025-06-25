import "./About.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id={"about"}>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className={"container about__container"}>
        <div className={"about__me"}>
          <div className={"about__me-image"}>
            <img src={ME} alt="Kanhaiya Agrawal" />
          </div>
        </div>
        <div className={"about__content"}>
          <div className={"about__cards"}>
            <article className={"about__card"}>
              <FaAward className={"about__icon"} />
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
            {/* <article className={'about__card'}>
                            <FiUsers className={"about__icon"}/>
                            <h5>Clients</h5>
                            <small>300+ Clients</small>
                        </article> */}
            <article className={"about__card"}>
              <VscFolderLibrary className={"about__icon"} />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            I’m Kanhaiya Agrawal — a B.Tech student and passionate full-stack
            developer with a growing interest in AI and machine learning. I
            specialize in building scalable, high-performance web applications
            using React, Redux, Node.js, Express.js, and MongoDB.
            <br />
            Whether it’s crafting responsive UIs or designing robust backend
            APIs, I focus on writing clean, maintainable code that solves
            real-world problems. I actively practice DSA to sharpen my
            problem-solving skills and love exploring how AI can make digital
            solutions smarter and more impactful.
            <br />
            I'm looking for opportunities where I can merge full-stack
            development with smart technologies to build innovative and
            meaningful products.
          </p>
          <a href={"#contact"} className={"btn btn-primary"}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
