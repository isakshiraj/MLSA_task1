/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/machine.jpg";

const imageAltText = "Machine";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Portfolio",
    description:
      "I made this portfolio so that people can connnect with me easily",
    url: "https://isakshiraj.github.io/Portfolio/",
  },
  {
    title: "Portfolio Creation",
    description:
      "Made this portfolio so that anyone can use this template and make there portfolio with required section",
    url: "https://isakshiraj.github.io/PortfolioCreations/",
  },
  {
    title: "Society Website: Codebenders",
    description:
      "For society promotions active participation",
    url: "https://isakshiraj.github.io/Codebender-22/",
  },
  {
    title: "LegalKycBuddy",
    description:
      "Made this website to aware people about KYC framework and laws",
    url: "https://isakshiraj.github.io/LegalKycBuddy/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
