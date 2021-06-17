import * as images from "./images";
import React, { useState } from 'react';
import Card from "./components/Card";

export const IntersectionObserverPage = () => {
  return (
    <>
      {Object.keys(images).map((image, i) => (
        <Card src={images[image]} key={i} />
      ))}
    </>
  );
};
