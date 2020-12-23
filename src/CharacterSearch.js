import React, { useState, useEffect } from "react";
import { getCharacter } from "rickmortyapi";
import useDropdown from "./useDropdown";
import Results from "./Results";

const CharacterSearch = () => {
  const [page, setPage] = useState("");
  const [typestuff, setTypestuff] = useState([]);
  const [characterstuff, setCharacterstuff] = useState([]);
  const [type, TypeDropdown] = useDropdown("CharacterType", "", typestuff);
  const [character, CharacterDropdown] = useDropdown(
    "CharacterName",
    "",
    characterstuff
  );
  const [persons, setPersons] = useState([]);

  async function requestChars() {
    const { results } = await getCharacter({
      name: character
    });
    console.log("results", results);
    console.log("clicked");

    setPersons(results || []);
  }

  useEffect(() => {
    setTypestuff([]);
    setCharacterstuff([]);

    getCharacter({
      page: page
    }).then(({ results }) => {
      const typeData = results.map(({ type }) => type);
      const filteredType = typeData.filter(
        (item, index) => typeData.indexOf(item) === index
      );
      setTypestuff(filteredType);
    }, console.error);

    function getCharFromType(typevar) {
      if (type === typevar) {
        getCharacter({
          type: typevar
        }).then(({ results }) => {
          const charData = results.map(({ name }) => name);
          const filteredChar = charData.filter(
            (item, index) => charData.indexOf(item) === index
          );
          setCharacterstuff(filteredChar);
        }, console.error);
      }
    }

    getCharFromType(type);
  }, [type, page]);

  return (
    <div className="character-search">
      <h1>Characters</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestChars();
        }}
      >
        <label htmlFor="page">
          Page
          <input
            type="text"
            id="page"
            value={page}
            placeholder="Pick a page no from 1 to 34"
            onChange={(e) => setPage(e.target.value)}
          />
        </label>
        <TypeDropdown />
        <CharacterDropdown />
        <button type="submit">Find Char</button>
      </form>
      <Results chars={persons} />
    </div>
  );
};

export default CharacterSearch;
