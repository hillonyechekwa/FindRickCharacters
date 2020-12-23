import React, { Component } from "react";
import { getCharacter } from "rickmortyapi";

class Details extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const details = await getCharacter([this.props.id]);
    this.setState({
      name: details.name,
      status: details.status,
      species: details.species,
      gender: details.gender,
      type: details.type,
      origin: details.origin.name,
      location: details.location.name,
      media: details.image,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      name,
      status,
      species,
      gender,
      type,
      origin,
      location,
      media
    } = this.state;

    return (
      <div>
        <img src={media} alt="character" />
        <h1>Name: {name}</h1>
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>{`${gender}-${type}`}</h2>
        <h2>{`Orign:${origin}-LastKnownLocation:${location}`}</h2>
      </div>
    );
  }
}

export default Details;
