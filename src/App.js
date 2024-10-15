import React, {useState, useEffect } 
from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importación de íconos
import NotFound from './components/NotFound';
import CVSection from './components/CVSection';

function App() {
  const [isOffline, setIsOffline] = useState(false);

  // Detectar si el usuario está sin conexión
  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  // Si el usuario está sin conexión, mostrar mensaje
  if (isOffline) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">You're offline</h1>
        <p className="text-lg text-gray-600">Please check your internet connection.</p>
        <a href="/" className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Try again
        </a>
      </div>
    );
  }
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-center items-center px-5">
            {/* Links del Menú */}
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-me" className="hover:text-gray-300 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/work-experience" className="hover:text-gray-300 transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/CVSection" className="hover:text-gray-300 transition-colors">
                  CVSection
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contenido de las páginas */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/CVSection" element={<CVSection /> } />
            <Route path='*' element = {<NotFound />} />
          </Routes>
        </main>

        {/* Footer con enlaces sociales */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto flex justify-center space-x-8">
            <a href="https://github.com/eduardo343" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl hover:text-purple-500 transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alan-eduardo-ugarte-saucedo-02a60b251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl hover:text-blue-600 transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:alande18@hotmail.com" aria-label="Email" className="text-2xl hover:text-red-500 transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
