import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import '../App.css';
import TopBanner from './first';
import Movies from './Movies';
import { Home } from './Home';
import Navbar from './Navbar';
import Podcast from './Podcast';
//test
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="Movies" element={<Movies />}></Route>
          <Route path="Podcast" element={<Podcast />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
