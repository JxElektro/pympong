import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DocumentManagement from './pages/DocumentManagement';
import SupplierManagement from './pages/SupplierManagement';
import Training from './pages/Training';
import Packaging from './pages/Packaging';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<DocumentManagement />} />
            <Route path="/suppliers" element={<SupplierManagement />} />
            <Route path="/training" element={<Training />} />
            <Route path="/packaging" element={<Packaging />} />
            <Route path="/users" element={<UserManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;