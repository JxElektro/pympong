import React from 'react';

const DocumentManagement: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Documentación</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Guías de uso de maquinarias</h2>
          {/* Add content for machinery guides */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Gestión de proveedores</h2>
          {/* Add content for supplier management */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Manuales de procedimientos internos</h2>
          {/* Add content for internal procedures */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Documentos de capacitación</h2>
          {/* Add content for training documents */}
        </div>
      </div>
    </div>
  );
};

export default DocumentManagement;