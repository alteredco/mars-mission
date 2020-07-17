import React from "react";
import "./Home.scss";
import { RoverNavItem } from "./RoverNavItem";
import { Hero } from "../../Components/Hero/Hero";

export function Home(): JSX.Element {
  return (
    <div className="roverHome__container">
      <Hero
        headingText={"Welcome"}
        rover={"curiosity"}
        imageUrl={
          "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22313.jpg"
        }
      />
      <ul className="roverNav">
        <RoverNavItem
          imageUrl={`${process.env.PUBLIC_URL}/Images/curiosity.en.png`}
          align={"rightAlign"}
          altText={"Curiosity Rover"}
          description={"Curiosity"}
          destination={"/curiosity"}
        />
        <RoverNavItem
          imageUrl={`${process.env.PUBLIC_URL}/Images/spirit-opportunity.en.png`}
          align={"leftAlign"}
          altText={"Opportunity Rover"}
          description={"Opportunity"}
          destination={"/opportunity"}
        />
        <RoverNavItem
          imageUrl={`${process.env.PUBLIC_URL}/Images/sojourner.en.png`}
          align={"rightAlign"}
          altText={"Spirit Rover"}
          description={"Spirit"}
          destination={"/spirit"}
        />
      </ul>
    </div>
  );
}
