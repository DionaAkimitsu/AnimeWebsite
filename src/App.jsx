import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeDetail';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;