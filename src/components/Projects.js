import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Ensure you have react-icons installed

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A project aimed at [project goal].',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/example',
      image: 'https://via.placeholder.com/150', // Replace with actual image link
    },
    // Add more projects here
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
            style={{ animation: `fadeIn 0.5s ease forwards ${index * 0.2}s` }} // Entrance animation
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title || 'Project Image'}
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
            />
            {/* Project Information */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <p className="font-semibold">Technologies Used:</p>
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
                aria-label={`View project ${project.title}`}
              >
                View Project <FaExternalLinkAlt className="ml-2" />
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
