import React from "react";
import { Link } from "@reach/router";

const Person = (props) => {
  const {
    name,
    status,
    species,
    gender,
    type,
    origin,
    location,
    media,
    id
  } = props;

  return (
    <Link to={`/details/${id}`}>
      <div className="image-container">
        <img src={media} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{status}</h2>
        <h2>{`${gender}-${species}-${type}`}</h2>
        <h2>{`${origin}-${location}`}</h2>
      </div>
    </Link>
  );
};

export default Person;
