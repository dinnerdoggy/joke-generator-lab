'use client';

import Page from '../api/jokeData';

/* eslint-disable react/button-has-type */
function Home() {
  const handleClick = () => {
    Page();
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
    </div>
  );
}

export default Home;
