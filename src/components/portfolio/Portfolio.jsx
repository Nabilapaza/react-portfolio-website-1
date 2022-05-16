import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Rock, Paper & Scissors with (ReactJS & Style Components)",
      github: "https://github.com/Nabilapaza/rock-paper-scissors-Mario-Nabil",
      demo: "https://rock-paper-scissors-mario-nabil.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
