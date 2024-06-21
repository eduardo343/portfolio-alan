import React from 'react';

function Projects() {
  return (
    <div className="container">
      <h1>Proyectos</h1>
      <div className="project">
        <h2>Mi Proyecto Asombroso</h2>
        <p>Descripción: Un proyecto destinado a [objetivo del proyecto].</p>
        <p>Tecnologías Utilizadas: HTML, CSS, JavaScript, React</p>
        <a href="[Enlace a GitHub]">Enlace al Proyecto</a>
        {/* Aquí puedes agregar una imagen del proyecto */}
      </div>
      {/* Repite para más proyectos */}
    </div>
  );
}

export default Projects;
