import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 text-center p-5 box-border">
      <div className="animate-fadeIn"> {/* Usamos la clase de animación personalizada */}
        <h1 className="text-4xl font-bold text-gray-800 mb-5">Hey! Welcome to my portfolio!</h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm Alan Saucedo, a software engineer passionate about programming and physics. Explore my projects and learn more about me.
        </p>
      </div>
      <div className="flex justify-center gap-5 mt-8">
        <a href="https://github.com/eduardo343" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-4xl transition-colors duration-300 hover:text-purple-600" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/alan-eduardo-ugarte-saucedo-02a60b251/" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-4xl transition-colors duration-300 hover:text-blue-700" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:alande18@hotmail.com" className="text-gray-800 text-4xl transition-colors duration-300 hover:text-red-600" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Home;
