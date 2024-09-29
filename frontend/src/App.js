// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Predictor from './Predictor'; // Your Predictor component
import About from './About';
import Navbar from './Navbar';
import './App.css'; // Import your CSS for additional styles

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <h1 className="app-heading">Maintenance Predictor</h1>
                <div className="navbar">
                    <ul className="navbar-links">
                        <li><a href="/">Predict</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Predictor />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
