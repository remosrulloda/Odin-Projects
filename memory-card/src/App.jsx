import { useState, useEffect } from 'react'
import './App.css'
import getData from './Api'

let numCards = 5;

function FisherYatesShuffle(cardsArray) {
  let i = cardsArray.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cardsArray[j];
    cardsArray[j] = cardsArray[i];
    cardsArray[i] = temp;
  }
}

function getRandomSelection(pokemonList) {
  FisherYatesShuffle(pokemonList);
  return pokemonList.slice(0, 5);
}

function Card({ data, onClick }) {
  return (
    <div id="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={data.sprites.front_default} alt={data.name} />
      <h2>{data.name}</h2>
    </div>
  );
}

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemon, setPokemon] = useState([]); // current pokemon
  const [clickedCards, setClickedCards] = useState(new Set());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const data = await getData();
        FisherYatesShuffle(data);
        setAllPokemon(data);
        setPokemon(getRandomSelection(data));
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }
    fetchPokemon();
  }, []);

  const handleCardClick = (mon) => {
    if (gameOver || win) return;

    if (clickedCards.has(mon.name)) {
      setGameOver(true);
    } else {
      const newClicked = new Set(clickedCards);
      newClicked.add(mon.name);
      setClickedCards(newClicked);
      setScore(score + 1);

      if (newClicked.size === numCards) {
        setWin(true);
      } else {
        // Shuffle cards after each click
        const shuffledPokemon = [...pokemon];
        FisherYatesShuffle(shuffledPokemon);
        setPokemon(shuffledPokemon);
      }
    }
  };

  const resetGame = () => {
    setClickedCards(new Set());
    setScore(0);
    setGameOver(false);
    setWin(false);

    setPokemon(getRandomSelection(allPokemon));
  }

  return (
    <div className="app">
      <h1>Memory Card</h1>
      <h2>Score: {score}</h2>

      {gameOver ? (
        <div className="game-over">
          <h2>Game Over! You already clicked that card!</h2>
          <button onClick={resetGame}>Retry</button>
        </div>
      ) : win ? (
        <div className="win-screen">
          <h2>Congratulations! You Win!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <div className="card-container">
          {pokemon.length > 0 ? (
            pokemon.map((mon, index) => (
              <Card key={index} data={mon} onClick={() => handleCardClick(mon)} />
            ))
          ) : (
            <p>Rendering...</p>
          )}
        </div>
      )
      }
    </div>
  );
}

export default App;
