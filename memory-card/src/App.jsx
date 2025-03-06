import { useState, useEffect } from 'react'
import './App.css'
import getData from './Api'

function Card({ data, index }) {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div id="card">
      <img src={data.sprites.front_default} alt={data.name} />
      <h2>{data.name}</h2>
    </div>
  );
}

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const data = await getData();
        if (Array.isArray(data)) {
          setPokemon(data.slice(0, 12));
          console.log(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setPokemon([]);
        }
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <>
      {pokemon.length > 0 ? (
        pokemon.map((poke, index) => (
          <Card key={index} data={poke} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
