import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id={"portfolio"}>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className={"container portfolio__container"}>
        
        <article className={"portfolio__item"}>
          <div className={"project_details"}>
            <div className={"project_title"}>
              <h2>Twooter</h2>
              <h4 className={"subtitle"}>
                Your Voice. Your Vibe. Your Platform
              </h4>
            </div>
            <div className={"project__details"}>
              <div className={"project__summary"}>
                <p>
                  Twooter is a social media platform that allows users to share
                  stories, images, and videos, interact through likes and
                  dislikes, and explore trending hashtags. Each user gets a
                  unique ID to personalize their experience and stay connected
                  with the latest conversations.
                </p>
              </div>

              <div class="tech-stack">
                <span class="tech-btn">React</span>
                <span class="tech-btn">Redux</span>
                <span class="tech-btn">Node.js</span>
                <span class="tech-btn">MongoDB</span>
                <span class="tech-btn">Bootstrap</span>
                <span class="tech-btn">SCSS</span>
                <span class="tech-btn">Lazy Loading</span>
              </div>
            </div>
          </div>

          <div className={"portfolio__item-cta"}>
            <a
              href={"https://github.com/KanhaiyaAggarwal556/Twooter"}
              className={"btn"}
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={"https://twootersocial.netlify.app/"}
              className={"btn btn-primary"}
              target={"_blank"}
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"project_details"}>
            <div className={"project_title"}>
              <h2>ArkaEve</h2>
              <h4 className={"subtitle"}>Crafting your Dream Event</h4>
            </div>
            <div className={"project__details"}>
              <div className={"project__summary"}>
                <p>
                  Arka Eve is an event planning platform that helps users
                  explore 200+ venues and 500+ restaurants across India. It
                  allows customers to create personalized events, connect with
                  professional event planners, and manage everything through a
                  dedicated admin panel.
                </p>
              </div>

              <div class="tech-stack">
                <span class="tech-btn">React</span>
                <span class="tech-btn">Redux</span>
                <span class="tech-btn">Express.js</span>
                <span class="tech-btn">Node.js</span>
                <span class="tech-btn">MongoDB</span>
                <span class="tech-btn">TailwindCSS</span>
              </div>
            </div>
          </div>

          <div className={"portfolio__item-cta"}>
            <a
              href={"https://github.com"}
              className={"btn"}
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={"https://go.screenpal.com/watch/cZQfqZVRvRJ"}
              className={"btn btn-primary"}
              target={"_blank"}
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"project_details"}>
            <div className={"project_title"}>
              <h2>SnapiSearch</h2>
              <h4 className={"subtitle"}>
                Find Fast. List Smart. Finish Strong.
              </h4>
            </div>
            <div className={"project__details"}>
              <div className={"project__summary"}>
                <p>
                  SnapySearch is a smart listing tool with a powerful search bar
                  that helps users quickly find items by name or listing date.
                  It also allows users to create their own to-do lists, manage
                  tasks, and seamlessly move completed items to a separate
                  section for better organization.
                </p>
              </div>

              <div class="tech -stack">
                <span class="tech-btn">JavaScript</span>
                <span class="tech-btn">SCSS</span>
                <span class="tech-btn">HTML</span>
                <span class="tech-btn">MySQL</span>
                <span class="tech-btn">Node.js</span>
                <span class="tech-btn">Bootstrap</span>
              </div>
            </div>
          </div>

          <div className={"portfolio__item-cta"}>
            <a
              href={"http://github.com/KanhaiyaAggarwal556/searchApp"}
              className={"btn"}
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={"https://snapisearch.netlify.app/"}
              className={"btn btn-primary"}
              target={"_blank"}
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"project_details"}>
            <div className={"project_title"}>
              <h2>SIDECUP-Family-Show</h2>
              <h4 className={"subtitle"}>Tee Off Together</h4>
            </div>
            <div className={"project__details"}>
              <div className={"project__summary"}>
                <p>
                  An immersive web experience with custom animations and
                  seamless transitions that bring the Family Golf community to
                  life. Intuitive layouts, interactive elements, and polished
                  UI/UX design showcase my attention to detail and front-end
                  craftsmanship.
                </p>
              </div>

              <div class="tech-stack">
                <span class="tech-btn">JavaScript</span>
                <span class="tech-btn">HTML</span>
                <span class="tech-btn">CSS</span>
                <span class="tech-btn">SCSS</span>
                <span class="tech-btn">UI/UX</span>
                <span class="tech-btn">Advance Animation</span>
              </div>
            </div>
          </div>

          <div className={"portfolio__item-cta"}>
            <a
              href={
                "https://github.com/KanhaiyaAggarwal556/SIDECUP-Family-show"
              }
              className={"btn"}
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={"https://sidecup-family-show.netlify.app/"}
              className={"btn btn-primary"}
              target={"_blank"}
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"project_details"}>
            <div className={"project_title"}>
              <h2>Mastering-DSA</h2>
              <h4 className={"subtitle"}>Code. Analyze. Conquer.</h4>
            </div>
            <div className={"project__details"}>
              <div className={"project__summary"}>
                <p>
                  An intuitive DSA framework inspired by Striver’s Sheet and top
                  educators. From basic math to dynamic programming, it features
                  clear pseudocode, complexity insights, real-world use cases,
                  and three solution tiers—brute, improved, optimized—each
                  linked to live code.
                </p>
              </div>

              <div class="tech-stack">
                <span class="tech-btn">Python</span>
                <span class="tech-btn">Data Structure and Algorithm</span>
                <span class="tech-btn">Google Docs</span>
                <span class="tech-btn">Google Drive</span>
                <span class="tech-btn">Git</span>
              </div>
            </div>
          </div>

          <div className={"portfolio__item-cta"}>
            <a
              href={"https://github.com/KanhaiyaAggarwal556/Mastering-DSA"}
              className={"btn"}
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={
                "https://drive.google.com/drive/folders/1I9v9tRKdITDGdHLQcZvkyDH5pFbFPi_f"
              }
              className={"btn btn-primary"}
              target={"_blank"}
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"project_details"}>
            <div className={"project_title"}>
              <h2>journalismmentor</h2>
              <h4 className={"subtitle"}>Illuminate Truth, Empower Change</h4>
            </div>
            <div className={"project__details"}>
              <div className={"project__summary"}>
                <p>
                  An engaging journalism awareness platform highlighting
                  storytelling’s and truth-seeking’s impact. Featuring Home,
                  About Us, Why It Matters, Course Overview, and Contact
                  sections, it educates users on journalism’s power to inform,
                  engage, and drive societal change.{" "}
                </p>
              </div>

              <div class="tech-stack">
                <span class="tech-btn">JavaScript</span>
                <span class="tech-btn">React</span>
                <span class="tech-btn">HTML</span>
                <span class="tech-btn">TailwindCSS</span>
              </div>
            </div>
          </div>

          <div className={"portfolio__item-cta"}>
            <a
              href={"https://github.com/KanhaiyaAggarwal556/JournalismMentor"}
              className={"btn"}
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={"https://journalismmentor.netlify.app/"}
              className={"btn btn-primary"}
              target={"_blank"}
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
