import React from "react";


function Footer() {
  return (
    <div>
      <footer className="footer">
        <h2>Contact Information</h2>
        <ul className="links" id="contact">         
          <li>
            <a className="contacts" href="https://www.github.com/difurung/">
              Github
            </a>
          </li>
          <li>
            <a
              className="contacts"
              href="https://www.linkedin.com/in/denart-ifurung-01a0ba6/"
            >
              Linked In
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;