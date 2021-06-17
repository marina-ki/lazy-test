import * as images from "./images";
import ViewportObserver from "viewport-observer";
import React, { useState } from "react";

const Component = ({ image }) => {
  const [visible, setVisible] = useState(false);

  const onEnter = () => {
    console.log("enter");
    setVisible(true);
  };

  return (
    <div style={{ height: 500 }}>
      <ViewportObserver onEnter={onEnter}>
        {visible ? (
          <img src={images[image]} width={500} alt="hoge" />
        ) : (
          <div></div>
        )}
      </ViewportObserver>
    </div>
  );
};

export const ViewportObserverPage = () => {
  return (
    <>
      {Object.keys(images).map((image, i) => (
        <Component image={image} key={i} />
      ))}
    </>
  );
};
