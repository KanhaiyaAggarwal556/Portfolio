import "./Experience.css";
const Experience = () => {
  return (
    <section id={"experience"}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className={"container experience__container"}>
        <div className={"experience1"}>
          <a
            href="https://asgard-thor-builder.comprodls.com/#/program-adult-young-adult/bundle"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Compro Technologies</h2>
          </a>
          <div className={"experience__title"}>
            <h3>Software Developer Intern</h3>
            <h4> 3/02/25 - Present</h4>
          </div>
          <div className={"experience__content"}>
            <article className={"experience__details"}>
              <div>
                As a full-stack developer at Compro Technologies, I led the
                Builder platform’s redevelopment by adding advanced filters for
                time, user, product, and category to improve accessibility and
                readability. I engineered robust backend enhancements and
                automated CI/CD pipelines, demonstrating end-to-end technical
                expertise and ownership.
              </div>
              <div class="tech-stack">
                <span class="tech-btn">Vue.js</span>
                <span class="tech-btn">Nuxt.js</span>
                <span class="tech-btn">Node.js</span>
                <span class="tech-btn">TypeScript</span>
                <span class="tech-btn">JavaScript</span>
                <span class="tech-btn">IBM-Cloudant</span>
                <span class="tech-btn">TailwindCSS</span>
                <span class="tech-btn">SCSS</span>
                <span class="tech-btn">RESTful APIs</span>
                <span class="tech-btn">Git</span>
                <span class="tech-btn">GiHub</span>
                <span class="tech-btn">SCSS</span>
                <span class="tech-btn">CI/CD</span>
                <span class="tech-btn">Shadcn-vue</span>
                <span class="tech-btn">Skeleton UI/UX</span>
              </div>
            </article>
          </div>
        </div>

        <div className={"experience2"}>
          <a href="https://bluestock.in/" target="_blank" rel="noreferrer">
            <h2>BlueStock Fintech</h2>
          </a>
          <div className={"experience__title"}>
            <h3>SDE Intern</h3>
            <h4> 1/11/24 - 30/12/25</h4>
          </div>
          <div className={"experience__content"}>
            <article className={"experience__details"}>
              <div>
                Engineered a real-time IPO analytics dashboard featuring
                gain/loss metrics, Quick Links (NSE/BSE/SEBI), and Main Board
                tracking (upcoming/ongoing/new listings). Developed REST
                API-integrated IPO registration with full data management
                capabilities, enhancing financial workflow efficiency by 35%.
              </div>
              <div class="tech-stack">
                <span class="tech-btn">React.js</span>
                <span class="tech-btn">Redux</span>
                <span class="tech-btn">Next.js</span>
                <span class="tech-btn">Node.js</span>
                <span class="tech-btn">TypeScript</span>
                <span class="tech-btn">JavaScript</span>
                <span class="tech-btn">MongoDB</span>
                <span class="tech-btn">TailwindCSS</span>
                <span class="tech-btn">RESTful APIs</span>
                <span class="tech-btn">Git</span>
                <span class="tech-btn">GiHub</span>
                <span class="tech-btn">Lazy Loading</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
