import React from "react";
import Tile from "../../components/Tile";

// import css styles
import "../../css/style.css";

function WorkPage() {
  const projectCollection = [
    {
      id: "MVC-5/breakaway",
      title: "Breakaway",
      description:
        "Breakaway increases productivity by helping create a culture of taking breaks where employees can share their vacation experiences.",
      imageUrl: "../assets/img/breakaway-preview.jpg",
      appUrl: "https://breakaway-vacay.herokuapp.com/",
    },
    {
      id: "calebkirkish/discover-serenity",
      title: "Discover Serenity",
      description:
        "Discover Serenity provides the best hiking trail options in the United States, avoiding crowds and therefore easier to find serenity outdoors.",
      imageUrl: "../assets/img/discover-serenity-preview.jpg",
      appUrl: "https://calebkirkish.github.io/discover-serenity/",
    },
    {
      id: "JonPhoenix/thunder-burger-app",
      title: "Thunder Burger",
      description:
        "Thunder Burger is a restaurant app where burger lovers can order their favorite burgers and devour them as fast as one click!",
      imageUrl: "../assets/img/thunder-burger-preview.jpg",
      appUrl: "https://thunder-burger-app.herokuapp.com/",
    },
    {
      id: "JonPhoenix/the-davinci-coder",
      title: "Da Vinci Coder",
      description:
        "Thunder Burger is a restaurant app where burger lovers can order their favorite burgers and devour them as fast as one click!",
      imageUrl: "../assets/img/davinci-coder-preview.jpg",
      appUrl: "https://jonphoenix.github.io/the-davinci-coder/",
    },
    {
      id: "JonPhoenix/sunnymoon-weather-app",
      title: "SunnyMoon Weather",
      description:
        "A weather dashboard application with a powerful search functionality to find the current weather conditions for any city in the world.",
      imageUrl: "../assets/img/sunnymoon-weather-preview.jpg",
      appUrl: "https://jonphoenix.github.io/sunnymoon-weather-app/",
    },
    {
      id: "JonPhoenix/not-in-this-lifetime",
      title: "Not In This Lifetime",
      description:
        "A tribute to the impressive print artwork created for the legendary rock band Guns N’ Roses “Not In This Lifetime” Tour, announced in April 2016.",
      imageUrl: "../assets/img/not-in-this-lifetime-preview.jpg",
      appUrl: "https://jonphoenix.github.io/not-in-this-lifetime/",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {projectCollection.map((project) => (
            <Tile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkPage;
