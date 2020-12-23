import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedPropsFromState({ media }) {
    let photos = ["https://rickandmortyapi.com/api/character/avatar/1.jpeg"];
    if (media.length) {
      photos = media.map((item) => item);
    }

    return { photos };
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="character" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="character thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
