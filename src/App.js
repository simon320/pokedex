import "./App.css"
import React from "react";
import { Routes, Route } from "react-router-dom";
import PokeAPI from "./pokedex/PokeAPI";


function App() {

  return (
      <Routes>
        <Route path="/" element={<PokeAPI />} />
      </Routes>
  );
}

export default App;
