export default async function Page() {
  const data = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart');
  const jokes = await data.json();

  console.warn(jokes.setup);
  console.warn(jokes.delivery);

  return (
    <ul>
      <li key={jokes.setup}>
        <strong>{jokes.setup}</strong>
      </li>
      <li key={jokes.delivery}>{jokes.delivery}</li>
    </ul>
  );
}
