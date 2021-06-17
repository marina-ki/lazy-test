import React, { useRef } from "react";
import * as images from "./images";
import { useIntersection } from "use-intersection";

const Component = ({ image }) => {
  const target = useRef(null);
  const intersecting = useIntersection(target, {
    rootMargin: "250px",
    once: true,
  });
  return (
    <div ref={target}>
      {intersecting ? <img src={images[image]} width={500} alt="hoge"/> : <div></div>}
    </div>
  );
};

export const UseIntersectionPage = () => {
  return (
    <>
      {Object.keys(images).map((image, i) => (
        <Component key={i} image={image} />
      ))}
    </>
  );
};
