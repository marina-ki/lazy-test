import * as images from "./images";
import ViewportObserver from 'viewport-observer';
import React, { useState } from 'react';

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
          <img src={images[image]} key={i} width={500}/>
        ) : (
          <div></div>
        )}
        </ViewportObserver>
      ))}
    </>
  );
};
