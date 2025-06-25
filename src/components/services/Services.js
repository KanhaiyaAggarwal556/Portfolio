import './Services.css'
import {BsCheck2} from "react-icons/bs";

const Services = () => {
    return (
        <section id={"services"}>
            <h2>Expertise</h2>
            <div className={"container services__container"}>
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Backend Developer</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Design and implement scalable RESTful APIs in Node.js/Express for advanced filtering workflows.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Architect robust schemas in MySQL and MongoDB, optimizing for high-volume real-time analytics.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Integrate NSE, BSE, and SEBI APIs to fetch live market data, powering automated IPO status updates.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Implement caching, security best practices, and testing, collaborating on CI/CD pipelines.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Web Development</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Build responsive, user-friendly UIs using Vue.js, Nuxt.js, and modern JavaScript frameworks.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Develop dynamic dashboards with real-time data, filters, and RESTful API integrations.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Implement component-based architecture for scalability, maintainability, and reusability.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Ensure cross-browser compatibility, accessibility, and performance optimization across pages.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Collaborate on end-to-end features, from frontend UI to backend logic and deployment.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Follow agile practices and version control (Git) to ensure smooth team collaboration and delivery.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>AI & ML</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Deeply interested in AI/ML with a strong focus on real-world applications and problem-solving.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Currently building foundational knowledge in Python, linear algebra, calculus, and statistics.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Exploring machine learning concepts to develop intelligent, data-driven web solutions.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Actively following the AI ecosystem to stay updated with the latest tools and trends.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>On a journey to build impactful projects that combine web development with AI/ML capabilities.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services