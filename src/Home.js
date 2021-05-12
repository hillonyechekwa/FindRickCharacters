import React from 'react';
import Heroimg from './Assets/Heroimg.png';
import { Link } from '@reach/router';


const Home = () => {
    return (
        <header className="home-container">
            <img src={Heroimg} alt="hero" />
            <h1>Find Rick Characters</h1>
            <p>
                Search for your favorite rick and morty characters and find out details about them.
            </p>
            <Link to="/characters" className="go-char"><button> Start here</button></Link>
        </header>
    )
}

export default Home
