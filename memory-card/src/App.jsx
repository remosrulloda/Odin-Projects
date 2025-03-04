import { useState, useEffect } from 'react'
import './App.css'
import getData from './Api'

function Card({ data }) {
  return (
    <div id="card">
      {data.length > 0 ? <h2>{data[0].name}</h2> : <p>Loading...</p>}
    </div>
  );
}

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const data = await getData();
      if (data) setPokemon(data);
    }
    fetchPokemon();
  }, []);

  return (
    <>
      <Card data={pokemon} />
    </>
  )
}

export default App
