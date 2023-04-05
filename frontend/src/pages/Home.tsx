import React from 'react';
import logo from './JoelHiltonHeadshot.jpeg';
import '../App.css';

export const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1>Joel Hilton's Site</h1>
      <img src={logo} alt="Joel Hilton" />
      <br></br>
      <br></br>
      <p>
        Welcome to my site! This website will display my favorite movies
        database and provide a link to my podcast. Enjoy!
      </p>
    </header>
  </div>
);
