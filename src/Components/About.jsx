/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "https://pixabay.com/vectors/robot-machine-technology-science-312566/";

const imageAltText = "tech";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "This is Sakshi Raj, a first-year undergraduate student pursuing a B. Tech in Electronics and Communication Engineering-Artificial Intelligence (ECE-AI) at the Indira Gandhi Delhi Technical University for Women (IGDTUW). I'm eager to contribute my skills and knowledge to solve complex problems and make a positive impact in the world of technology.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I’m an avid learner, always willing to learn and experiment with new things. I have qualities like sincerity, friendliness, open-mindedness and responsibility towards work. I have very good teamwork coordination as well as leadership qualities. Also, I have good communication skills and want to enhance them. I believe that I have the knowledge, skills, confidence, determination, dedication, discipline and positive attitude to positively impact my chosen perspectives. I might not know everything but I can assure you that I will find the most effective possible solutions.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
