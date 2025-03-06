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
        setPokemon(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <div className="card">
      {pokemon.length > 0 ? (
        pokemon.map((mon, index) => (
          <Card key={index} data={mon} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
