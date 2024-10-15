import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Full-Stack',
    company: 'Geem Solutions',
    duration: '2024 - 2024',
    description: `•Specialized in technologies like Angular, React, TypeScript, and a wide range of tools such as PHP, Python, and Laravel.\n
    • Developed custom point-of-sale systems for the restaurant and retail industries, improving operational efficiency and user experience.\n
    • Enhanced existing company systems, boosting functionality and efficiency by refactoring code and integrating new technologies.\n
    • Designed and implemented innovative solutions tailored to industry-specific needs, using Scrum methodology to ensure timely project delivery and optimize workflow.`,
  },
  {
    title: 'Front-End',
    company: 'Magmalabs',
    duration: '2023 - 2024',
    description: `• Delivered comprehensive technology solutions as a Java Developer,with expertise in both front-end and back-end development.\n
      • Led the development of Bright-Coders, an educational platform built with React Native, Ruby on Rails, and TypeScript,resulting in a 40% increase in user engagement.\n
      • Served as Scrum Master, managing sprint planning, daily stand-ups, and retrospectives, leading to a 20% improvement in team productivity..\n
      • Integrated third-party APIs and optimized database management (SQL Server, Oracle), significantly enhancing system functionality and scalability.`,
  },
  {
    title: 'Front-End',
    company: 'Devitm',
    duration: '2022 - 2023',
    description: `• Started my professional career at Devitm, developing web applications for clients using Vue.js, TypeScript, and MySQL.\n
      • Introduced and implemented Scrum methodology for project management and application development, improving coordination and project delivery.\n
      • Led client interactions to gather requirements and translate them into clear technical specifications.\n
      • Coordinated with internal teams to ensure alignment of expectations and successful project execution.`,
  },
];

function WorkExperience() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Work Experience</h1>

      <div className="relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-6 mb-8 transform transition-transform hover:scale-105 duration-300 fade-in-animation delay-${index * 200}`}
            aria-labelledby={`experience-title-${index}`}
          >
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-blue-600 text-3xl mr-3" aria-hidden="true" />
              <h2 id={`experience-title-${index}`} className="text-2xl font-semibold">
                {exp.title}
              </h2>
            </div>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="text-gray-500 mb-4">{exp.duration}</p>
            <p className="text-gray-600 whitespace-pre-line">{exp.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .fade-in-animation {
          animation: fadeIn 0.5s ease forwards;
        }
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

export default WorkExperience;
