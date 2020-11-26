import React from "react";
// import css styles
import "../../css/style.css";

function Navbar() {
  return (
    <>
      <div>
        <div className="container">
          <header className="row">
            <nav className="col">
              <ul className="nav justify-content-start transition">
                <li className="nav-item">
                  <a className="nav-link link-style" href="/">
                    <strong>Jon Phoenix</strong>
                    <sup>
                      <span class="note">®</span>
                    </sup>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-style" href="/work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-style"
                    href="./assets/doc/resume.pdf"
                    download=""
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}

export default Navbar;
