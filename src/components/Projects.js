import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

function Projects() {
  const projects = [
    {
      description: 'Un proyecto destinado a [objetivo del proyecto].',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '[Enlace a GitHub]',
      image: '[Enlace a una imagen del proyecto]',
    },
    // Añade más proyectos aquí
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
            style={{ animation: `fadeIn 0.5s ease forwards ${index * 0.2}s` }} // Animación de entrada
          >
            {/* Imagen del Proyecto */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />

            {/* Información del Proyecto */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <p className="font-semibold">Tecnologías Utilizadas:</p>
              <ul className="flex flex-wrap space-x-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="text-sm bg-gray-200 px-2 py-1 rounded">{tech}</li>
                ))}
              </ul>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Ver Proyecto <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
