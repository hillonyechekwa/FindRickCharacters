import React from "react";
import CharacterSearch from './CharacterSearch'
import Details from './Details'
import Logo from './Assets/rickandmortylogo.png';
import {Router, Link} from '@reach/router'
import "./styles.css";

export default function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <header>
       <Link to="/"> <img className="heroimage" src={Logo} alt="logo" /></Link>
      </header>
      <Router>
      <CharacterSearch path="/" />
      <Details path="/details/:id"/>
      </Router>
    </div>
    </React.StrictMode>
  );
}
