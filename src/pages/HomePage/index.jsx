import React from "react";

// import css styles
import "../../css/style.css";

function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col-12 text-center">
            <p className="title">Hello</p>
            <p className="tagline">I am Jon Phoenix</p>
          </section>
        </div>
      </div>
      <div className="container">
        <div className="row section">
          <section className="col-12 text-center">
            <article className="about">
              <figure>
                <img
                  src="./assets/img/jon-photo.jpg"
                  className="about-photo"
                  alt="Jon Phoenix"
                />
              </figure>
              <p className="title">about me</p>
              <p className="paragraph">
                Welcome to Jon Phoenix's online portfolio, a selection of web
                applications featuring JavaScript, HTML, CSS, Databases, React
                and responsive UI design across viewports.
              </p>
              <figure>
                <img
                  src="./assets/img/rainier_photo.jpg"
                  className="about-photo"
                  alt="Seattle"
                />
              </figure>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
