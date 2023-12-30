import App from '../pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../pages/informaction';
import { useState } from 'react';

export const Routerr = () => {
  const [pokemonData, setPokemonData] = useState();
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App setPokemonData={setPokemonData} />} />
        <Route path="/profile" element={<Profile pokemonData={pokemonData} />} />;

      </Routes>
    </BrowserRouter>

  )
} 