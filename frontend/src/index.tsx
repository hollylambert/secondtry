import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Design from './pages/Design';
import Movies from './pages/Movies';
import Podcast from './pages/Podcast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<Design />} />
          <Route path="Podcast" element={<Podcast />} />
          <Route path="Movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
