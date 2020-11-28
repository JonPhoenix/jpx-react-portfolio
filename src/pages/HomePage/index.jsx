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
            <p>I am Jon Phoenix</p>
          </section>
        </div>
      </div>
      <div className="container">
        <div className="row section">
          <section className="col-12 text-center">
            <article className="paragraph">
              <figure>
                <img
                  src="./assets/img/jon-photo.jpg"
                  className="jon-photo"
                  alt="Jon Phoenix"
                />
              </figure>
              <p className="title">Portfolio</p>
              <p>
                Welcome to Jon Phoenix's online portfolio, a selection of web
                applications featuring JavaScript, HTML, CSS, Databases, React
                and responsive UI design across viewports.
              </p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
