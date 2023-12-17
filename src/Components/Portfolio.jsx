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
import image from "../images/img2.jpg";

const imageAltText = "This picture shows how humans and machines are working together";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WordWhiz",
    description:
      "This website allows you to analyze text and provides you with a summary of the inputted text.",
    url: "https://abdullahawann.github.io/Word-Whiz-Website/",
  },
  {
    title: "My GPT",
    description:
      "It serves as a showcase of my skills in web development and design, utilizing the power of React and various other technologies.",
    url: "https://abdullahawann.github.io/GPT3/",
  },
  {
    title: "Space Invaders",
    description:
      "This is a reimplementation of the classic arcade game, Space Invaders, using C++.",
    url: "https://github.com/abdullahawann/Space-Invaders",
  },
  {
    title: "Snakes And Apples",
    description:
      "Snakes and Apples is a simple yet addictive game implemented in assembly language.",
    url: "https://github.com/abdullahawann/Snakes-And-Apples",
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
