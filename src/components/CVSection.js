import React from 'react';

const CVSection = () => {
  const cvUrl = '/Docs/alan_cv.pdf'; // Asegúrate de que el archivo esté en la carpeta public

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Mi CV</h2>

      {/* Visualización del CV en un iframe */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe 
          src={cvUrl} 
          title="CV de Alan Saucedo" 
          className="w-full h-96 border-none"
          loading="lazy" // Mejora el rendimiento
        ></iframe>
      </div>

      {/* Botón para descargar el CV */}
      <a 
        href={cvUrl} 
        download="Alan_cv.pdf"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out"
        aria-label="Descargar CV" // Mejora la accesibilidad
      >
        Descargar CV
      </a>

    </div>
  );
};

export default CVSection;
