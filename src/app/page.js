/* eslint-disable react/button-has-type */
function Home() {
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
      <button>Get a Joke</button>
    </div>
  );
}

export default Home;
