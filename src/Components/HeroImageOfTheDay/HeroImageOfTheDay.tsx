import React, { useEffect, useState } from "react";
import { getImageOfTheDay, ImageOfTheDay } from "../ApiFetch/ApodApiFetch";

export function HeroImageOfTheDay() {
  const [imageOfTheDay, setImageOfTheDay] = useState<ImageOfTheDay | null>(
    null
  );

  useEffect(() => {
    getImageOfTheDay().then((image) => setImageOfTheDay(image));
  }, []);

  if (!imageOfTheDay) {
    return <div>Loading</div>;
  }

  return (
    <section className="imageOfTheDay">
      <figure className="contentFigure">
        <MediaViewer imageOfTheDay={imageOfTheDay} />
      </figure>
      <figcaption>
        <h3 className="contentTitle">{imageOfTheDay.title}</h3>
      </figcaption>
      <p className="contentDescription">{imageOfTheDay.explanation}</p>
    </section>
  );
}

interface MediaViewerProps {
  imageOfTheDay: ImageOfTheDay;
}

function MediaViewer(props: MediaViewerProps): JSX.Element {
  if (props.imageOfTheDay.media_type == "video") {
    return (
      <iframe
        data-testid={"video-player"}
        className="contentIframe"
        src={props.imageOfTheDay.url}
        height="50"
      />
    );
  }

  return (
    <img
      className="contentImage"
      data-testid={"image-viewer"}
      src={props.imageOfTheDay.url}
      alt={props.imageOfTheDay.title}
    />
  );
}
