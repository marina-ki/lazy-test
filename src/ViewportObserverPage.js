import * as images from "./images";
import ViewportObserver from 'viewport-observer';
import React, { useState } from 'react';
import Card from "./components/Card";

export const ViewportObserverPage = () => {
  const [visible, setVisible] = useState(false);

  const onEnter = () => {
    console.log('enter');
    setVisible(true);
  };

  return (
    <>
      {Object.keys(images).map((image, i) => (
        <ViewportObserver onEnter={onEnter}>
           {visible ? (
          <Card src={images[image]} key={i} />
        ) : (
          <div></div>
        )}
        </ViewportObserver>
      ))}
    </>
  );
};
