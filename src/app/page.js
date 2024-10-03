'use client';

import { useState } from 'react';
import Page from '../api/jokeData';

/* eslint-disable react/button-has-type */
function Home() {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      Welcome to Next JS!
      <button onClick={handleClick}>Get a Joke</button>
      {showComponent && <Page />}
    </div>
  );
}

export default Home;
