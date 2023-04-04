import React from "react";

function Portfolio() {
  return (
    <div className="work">
      <h2 id="work">Work</h2>
      <div className="card-container">
        <a
          href="https://cede-qr-app.herokuapp.com/"
          className="card five"
          alt="Picture of the CEDE Application"
        >
          <title>CEDE</title>

          <p>javaScript, Bootstrap, React, MongoDB</p>
        </a>

        <a
          href="https://agile-peak-82285.herokuapp.com/login"
          className="card four"
          alt="Picture of the Helpinghands Application"
        >
          <title>Helpinghands</title>

          <p>HTML, CSS, javaScript, Tailwind, Handlebars</p>
        </a>
        <a
          href="https://keekerr.github.io/Movie-Beer-Roulette/"
          className="card three"
          alt="Picture of the Beer and Movie Roulette Application"
        >
          <title>Movie and Beer Roulette</title>

          <p>HTML, CSS</p>
        </a>
        <a
          href="https://difurung.github.io/Horiseon-Refactor-Project/"
          className="card one"
          alt="Horiseon Project Example: Picture of people in a meeting"
        >
          <title>HORISEON REFACTOR</title>

          <p>HTML, CSS</p>
        </a>
        <a
          href="https://difurung.github.io/prework-study-guide/"
          className="card two"
          alt="Pre-work Study Guide Example: Screenshot of the application"
        >
          <title>Pre-work Study Guide</title>

          <p>HTML, CSS, JavaScript</p>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;