import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a PYME Docs</h1>
      <p className="text-xl mb-8">Gestiona la documentación de tu empresa de manera eficiente</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Documentos', 'Proveedores', 'Capacitación', 'Paquetización', 'Usuarios'].map((module) => (
          <Link
            key={module}
            to={`/${module.toLowerCase()}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{module}</h2>
            <p>Gestiona tus {module.toLowerCase()} aquí</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;