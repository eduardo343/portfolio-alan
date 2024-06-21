import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/work-experience">Work Experience</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
