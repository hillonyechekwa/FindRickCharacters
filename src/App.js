import React from "react";
import CharacterSearch from './CharacterSearch'
import Details from './Details'
import Home from './Home'
import {Router} from '@reach/router'
import "./styles.css";

export default function App() {
  return (
    <React.StrictMode>
    <div className="App">
      
        <Router>
      <Home path="/" />
      <CharacterSearch path="/characters" />
      <Details path="/details/:id"/>
      </Router>
    </div>
    </React.StrictMode>
  );
}
