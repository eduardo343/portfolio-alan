import React from 'react'; // Importing React library
import { FaBriefcase } from 'react-icons/fa'; // Importing a briefcase icon from react-icons

// Array of experiences to be displayed
const experiences = [
  {
    title: 'Full-Stack', // Title of the position
    company: 'Geem Solutions', // Name of the company
    duration: '2024 - 2024', // Duration of the employment
    description: `• Specialized in technologies like Angular, React, TypeScript, and a wide range of tools such as PHP, Python, and Laravel.\n
    • Developed custom point-of-sale systems for the restaurant and retail industries, improving operational efficiency and user experience.\n
    • Enhanced existing company systems, boosting functionality and efficiency by refactoring code and integrating new technologies.\n
    • Designed and implemented innovative solutions tailored to industry-specific needs, using Scrum methodology to ensure timely project delivery and optimize workflow.`,
  },
  {
    title: 'Front-End', // Title of the position
    company: 'Magmalabs', // Name of the company
    duration: '2023 - 2024', // Duration of the employment
    description: `• Delivered comprehensive technology solutions as a Java Developer, with expertise in both front-end and back-end development.\n
    • Led the development of Bright-Coders, an educational platform built with React Native, Ruby on Rails, and TypeScript, resulting in a 40% increase in user engagement.\n
    • Served as Scrum Master, managing sprint planning, daily stand-ups, and retrospectives, leading to a 20% improvement in team productivity.\n
    • Integrated third-party APIs and optimized database management (SQL Server, Oracle), significantly enhancing system functionality and scalability.`,
  },
  {
    title: 'Front-End', // Title of the position
    company: 'Devitm', // Name of the company
    duration: '2022 - 2023', // Duration of the employment
    description: `• Started my professional career at Devitm, developing web applications for clients using Vue.js, TypeScript, and MySQL.\n
    • Introduced and implemented Scrum methodology for project management and application development, improving coordination and project delivery.\n
    • Led client interactions to gather requirements and translate them into clear technical specifications.\n
    • Coordinated with internal teams to ensure alignment of expectations and successful project execution.`,
  },
];

// Functional component to display work experience
function WorkExperience() {
  return (
    <div className="container mx-auto px-4 py-12"> {/* Main container with padding */}
      <h1 className="text-4xl font-bold text-center mb-12">Work Experience</h1> {/* Title */}

      <div className="space-y-8"> {/* Container for experiences with vertical spacing */}
        {experiences.map((exp, index) => ( // Iterating over experiences array
          <div
            key={index} // Unique key for each experience
            className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 fade-in-animation" // Styling for each experience card
            style={{ animationDelay: `${index * 0.2}s` }} // Delay for fade-in effect
            aria-labelledby={`experience-title-${index}`} // Accessibility label for the title
          >
            <div className="flex items-center mb-4"> {/* Flex container for title and icon */}
              <FaBriefcase className="text-blue-600 text-3xl mr-3" aria-hidden="true" /> {/* Briefcase icon */}
              <h2 id={`experience-title-${index}`} className="text-2xl font-semibold">
                {exp.title} {/* Experience title */}
              </h2>
            </div>
            <p className="text-gray-700 font-medium">{exp.company}</p> {/* Company name */}
            <p className="text-gray-500 mb-4">{exp.duration}</p> {/* Employment duration */}
            <p className="text-gray-600 whitespace-pre-line">{exp.description}</p> {/* Description of the experience with preserved whitespace */}
          </div>
        ))}
      </div>

      {/* CSS for fade-in animation */}
      <style>{`
        .fade-in-animation {
          opacity: 0; // Initial opacity
          transform: translateY(20px); // Initial position
          animation: fadeIn 0.5s ease forwards; // Animation properties
        }
        @keyframes fadeIn {
          to {
            opacity: 1; // Final opacity
            transform: translateY(0); // Final position
          }
        }
      `}</style>
    </div>
  );
}

export default WorkExperience; // Exporting the WorkExperience component
