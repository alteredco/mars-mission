﻿import React, { useEffect, useState } from "react";
import "../../ConstantsMixins.scss";
import "./HumansInSpace.scss";
import {
  getHumansInSpace,
  AstronautsInSpace,
  Astronaut,
} from "../ApiFetch/ISSAstrosApiFetch";
import { getAstrosImage, AstroImage } from "../ApiFetch/AstrosWikiApiFetch";

export function HumansInSpace() {
  const [humansInSpace, setHumansInSpace] = useState<AstronautsInSpace | null>(
    null
  );

  useEffect(() => {
    getHumansInSpace().then((astronauts) => setHumansInSpace(astronauts));
  }, []);

  if (!humansInSpace) {
    return <div>Loading</div>;
  }

  return (
    <div className="numberOfHumansInSpace">
      There are currently {humansInSpace.number} astronauts 👨‍🚀 in space!
      {humansInSpace.people.map((human) => (
        <DisplayAstronauts astronaut={human} />
      ))}
    </div>
  );
}

export interface AstronautProps {
  astronaut: Astronaut;
}

export function DisplayAstronauts(props: AstronautProps) {
  return (
    <div>
      <article
        data-testid="astronautsInSpaceNow"
        className="astronautsInSpaceNow"
      >
        {props.astronaut.name} on SpaceCraft: {props.astronaut.craft}
      </article>
    </div>
  );
}
