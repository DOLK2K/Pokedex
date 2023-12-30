import Pokemons from "../pokedex";


function App({ setPokemonData }) {

  return (
    <div className="App">
       <Pokemons setPokemonData={setPokemonData} />
      </div>
  );
}

export default App;
