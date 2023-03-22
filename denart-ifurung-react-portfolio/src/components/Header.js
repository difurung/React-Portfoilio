import React from "react";


function Header() {
  return(
<header className="header">
  <h1>Denart Ifurung</h1>
  <ul className="bar-container">
    <li>
      <a className="bar" href="/">
        About Me
      </a>
    </li>
    <li>
      <a className="bar" href="/interests">
        Interests
      </a>
    </li>
    <li>
      <a className="bar" href="/portfolio">
        My Work
      </a>
    </li>
    <li>
      <a className="bar" href="#contact">
        Contact Informaion
      </a>
    </li>
  </ul>
</header>
  );
}

export default Header;