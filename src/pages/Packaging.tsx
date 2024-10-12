import React from 'react';

const Packaging: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Paquetización</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Crear paquete</h2>
          {/* Add content for package creation */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Catálogo de maquinarias</h2>
          {/* Add content for machinery catalog */}
        </div>
      </div>
    </div>
  );
};

export default Packaging;