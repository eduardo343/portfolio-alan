import React, { useState } from 'react';
import Me from '../Images/Me.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngular, faCss3, faGit, faGithub, faGolang, faHtml5, faPhp, faPython, faReact, faRust, faVuejs } from '@fortawesome/free-brands-svg-icons'; 
import { faC } from '@fortawesome/free-solid-svg-icons'; 
import ruby from '../Images/ruby.png'; 
import angular_ts from '../Images/angular_ts.png'; 
import java_logo from '../Images/java_logo.png'; 
import pythonImg from '../Images/python.png';

// Definición de los caminos de aprendizaje
const learningPaths = [
  {
    image: ruby,
    alt: 'Ruby on Rails Logo',
    title: 'Ruby on Rails',
    points: [
      "I learned to create projects easily, thanks to my brother's support and books.",
      'RoR is easy to learn. The documentation and practice are excellent; I recommend the webpage: https://try.ruby-lang.org/',
    ],
  },
  {
    image: angular_ts,
    alt: 'Angular and TypeScript Logo',
    title: 'Angular/TypeScript',
    points: [
      'Building a dynamic project with Angular and TypeScript.',
      'Expanding my knowledge in the Java ecosystem through programming challenges.',
    ],
  },
  {
    image: java_logo,
    alt: 'Java Logo',
    title: 'Java',
    points: [
      "Learning Java with Minecraft. You need Java to create mods or mobs; it's fun to see your creations come to life.",
      'Contributing to open-source Java projects.',
    ],
  },
  {
    image: pythonImg,
    alt: 'Python Logo',
    title: 'Python',
    points: [
      'My experience with Python involves books, videos, and great YouTubers like Mouredev for project tutorials.',
      'I create projects; if you are interested, visit the project section or my GitHub profile.',
    ],
  },
];

// Íconos de tecnologías
const techIcons = [
  { icon: faReact, color: 'text-blue-600', label: 'React' },
  { icon: faPhp, color: 'text-purple-600', label: 'PHP' },
  { icon: faC, color: 'text-green-600', label: 'C' },
  { icon: faGolang, color: 'text-blue-400', label: 'Golang' },
  { icon: faRust, color: 'text-orange-600', label: 'Rust' },
  { icon: faVuejs, color: 'text-green-500', label: 'Vue.js' },
  { icon: faPython, color: 'text-yellow-500', label: 'Python' },
  { icon: faGithub, color: 'text-gray-800', label: 'GitHub' },
  { icon: faHtml5, color: 'text-orange-500', label: 'HTML5' },
  { icon: faCss3, color: 'text-blue-400', label: 'CSS3' },
];

function AboutMe() {
  const [visibility, setVisibility] = useState({
    isImageVisible: true,
    isLearningVisible: true,
  });

  // Función para alternar la visibilidad de las secciones
  const toggleVisibility = (key) => {
    setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-8">
      {/* Sección de la Imagen de Perfil */}
      {visibility.isImageVisible ? (
        <img 
          src={Me} 
          alt="Profile picture of Alan Saucedo" 
          className="w-48 h-auto max-w-xs mb-6 mx-auto border-4 cursor-pointer transition-transform transform hover:scale-105 rounded-full" 
          onClick={() => toggleVisibility('isImageVisible')} 
        />
      ) : (
        <div 
          className="text-center text-gray-700 mb-6 cursor-pointer"
          onClick={() => toggleVisibility('isImageVisible')} 
        >
          <p className="underline">Click here to see the image</p>
        </div>
      )}

      {/* Sección About Me */}
      <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">About Me</h1>
      <p className="text-lg mb-6 text-gray-700 text-center">
        Hi, I'm Alan Saucedo. I'm an engineer with experience in:
      </p>

      {/* Íconos de Tecnologías */}
      <div className="flex flex-wrap justify-center mb-6">
        {techIcons.map((tech, index) => (
          <FontAwesomeIcon 
            key={index} 
            icon={tech.icon} 
            className={`mx-2 my-1 ${tech.color} hover:scale-110 transition-transform`} 
            aria-label={tech.label}
            title={tech.label}
          />
        ))}
      </div>

      <p className="text-lg mb-6 text-gray-700 text-center">
        I love books and learning about frameworks or languages. I enjoy music, walks, and food, and have a passion for physics.
      </p>

      {/* Sección Learning Path */}
      <h2 
        className="text-3xl font-extrabold mb-6 text-green-700 text-center cursor-pointer flex items-center justify-center"
        onClick={() => toggleVisibility('isLearningVisible')} 
      >
        Learning Path
        <span className="ml-2 text-xl">
          {visibility.isLearningVisible ? '−' : '+'}
        </span>
      </h2>

      {visibility.isLearningVisible && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col"
            >
              {/* Imagen */}
              <div className="flex justify-center mb-4">
                <img 
                  src={path.image} 
                  alt={path.alt} 
                  className="w-24 h-auto rounded-lg border border-gray-300" 
                />
              </div>
              {/* Título */}
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">{path.title}</h3>
              {/* Puntos */}
              <ul className="space-y-3">
                {path.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    {/* Círculo Numerado */}
                    <span 
                      className={`flex-shrink-0 w-8 h-8 mr-4 flex items-center justify-center font-bold text-white rounded-full ${
                        idx % 2 === 0 ? 'bg-red-400' : 'bg-yellow-300'
                      }`}
                      aria-hidden="true"
                    >
                      {idx + 1}
                    </span>
                    {/* Texto */}
                    <p className="text-gray-700 flex-1 break-words">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutMe;
