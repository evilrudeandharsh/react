import { useState, useEffect } from "react";
import Popup from "./Popup.jsx";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPokemon, setPopupPokemon] = useState("");

  const pokeIndex = [
    "pikachu",
    "charizard",
    "bulbasaur",
    "squirtle",
    "gengar",
    "eevee",
    "snorlax",
    "lucario",
    "mewtwo",
    "jigglypuff"
  ];

  useEffect(() => {
    async function getPokemon(pokelist) {
      try {

        const promises = pokelist.map(async (pokemon) => {

          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
          if (!res.ok) {
            throw new Error(`Error ${res.status}: Pokemon not found - ${pokemon}`);
          }
          const data = await res.json();
          return { name: pokemon, sprite: data.sprites.front_default };

        });

        const results = await Promise.all(promises);
        setData(results);

      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }

    getPokemon(pokeIndex);
  }, []); 

  function handleCardClick(pokemonName) {
    if (selectedPokemons.includes(pokemonName)) {
      setPopupPokemon(pokemonName);
      setShowPopup(true);

      setSelectedPokemons([]);
      setHighscore((prevHigh) => Math.max(prevHigh, score));

      setScore(0);

    } else {
      setSelectedPokemons([...selectedPokemons, pokemonName]);
      setScore((prev) => prev + 1);
    }

    setData((prevData) => [...prevData].sort(() => Math.random() - 0.5));
  }

  return (
    <>
      {showPopup && <Popup pokemonName={popupPokemon} onClose={() => setShowPopup(false)} />}
      
      
      <div className="scoreboard">
        <h2>Score: {score}</h2>
        <h2>Highscore: {highscore}</h2>
      </div>

      <div className="box">
        <div className="card-container">
          {data.map((pokemon) => (
            <div className="card" key={pokemon.name} onClick={() => handleCardClick(pokemon.name)}>
              <img src={pokemon.sprite} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>

     

      
    </>
  );
};

export default FetchData;
