import React from 'react';

const Training: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Capacitación</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cursos de maquinaria</h2>
          {/* Add content for machinery courses */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Evaluaciones periódicas</h2>
          {/* Add content for periodic evaluations */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Historial de aprendizaje</h2>
          {/* Add content for learning history */}
        </div>
      </div>
    </div>
  );
};

export default Training;