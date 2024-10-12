import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Truck, BookOpen, Package, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">PYME Docs</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200"><Home className="inline-block mr-1" size={18} />Inicio</Link>
          <Link to="/documents" className="hover:text-blue-200"><FileText className="inline-block mr-1" size={18} />Documentos</Link>
          <Link to="/suppliers" className="hover:text-blue-200"><Truck className="inline-block mr-1" size={18} />Proveedores</Link>
          <Link to="/training" className="hover:text-blue-200"><BookOpen className="inline-block mr-1" size={18} />Capacitación</Link>
          <Link to="/packaging" className="hover:text-blue-200"><Package className="inline-block mr-1" size={18} />Paquetización</Link>
          <Link to="/users" className="hover:text-blue-200"><Users className="inline-block mr-1" size={18} />Usuarios</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;