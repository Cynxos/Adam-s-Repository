import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mountain from './pages/Mountain';
import Beaches from './pages/Beaches';
import Birds from './pages/Birds';
import Food from './pages/Food';
import Search from './pages/Search';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mountain" element={<Mountain />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/food" element={<Food />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;