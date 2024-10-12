import React from 'react';

const SupplierManagement: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Proveedores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lista de proveedores</h2>
          {/* Add content for supplier list */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Historial de pedidos</h2>
          {/* Add content for order history */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Documentación de contratos</h2>
          {/* Add content for contract documentation */}
        </div>
      </div>
    </div>
  );
};

export default SupplierManagement;