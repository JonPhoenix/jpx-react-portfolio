import React from "react";

// import css styles
import "../../css/style.css";

function HomePage() {
  return (
    <>
      <div className="main-container">
        <div className="row">
          <section className="col-12 text-center">
            <p className="title">Hello</p>
            <p className="tagline">I am Jon Phoenix</p>
            <p className="about paragraph">
              A multicultural{" "}
              <strong>front-end web developer and graphic designer</strong> with
              a strong background in <strong>branding</strong>, based in{" "}
              <strong>Seattle, WA</strong>. I see everything through the lens of
              possibilities, progress, challenges and solutions. I am constantly
              looking for learning new skills, experimenting with new ideas, and
              delivering excellent design execution.
            </p>
          </section>
        </div>
      </div>
      <div className="col-12 text-center">
        <div>
          <figure>
            <img
              src="./assets/img/jon-photo.jpg"
              className="about-photo"
              alt="Jon Phoenix"
            />
          </figure>
          <figure>
            <img
              src="./assets/img/rainier_photo.jpg"
              className="about-photo"
              alt="Seattle"
            />
          </figure>
        </div>
      </div>
      <div className="row">
        <section className="col-12 text-center">
          <p className="title">Portfolio</p>
          <p className="about paragraph">
            A selection of web applications showcasing the broad palette of{" "}
            <strong>
              full-stack web development technologies, and UI/UX skills
            </strong>{" "}
            that define my process. Proudly featuring{" "}
            <strong>"5 Sherpas", "Breakaway", and "Discover Serenity"</strong>,
            the remarkably creative result of a team collaboration as a member
            of{" "}
            <a className="link-jon" href="https://github.com/MVC-5">
              <strong>MVC-5</strong>
            </a>
            , a group of full-stack web developers. This portfolio features{" "}
            <strong>JavaScript</strong>, HTML, CSS, SQL / NoSQL Databases,{" "}
            <strong>MERN: Mongo, Express, Node, React</strong>, and polished UI
            interfaces. See my work{" "}
            <a className="link-jon" href="/work">
              <strong>HERE.</strong>
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export default HomePage;
