import { Link } from "react-router-dom"; // Asegúrate de usar react-router-dom

export default function PublicHeader() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Mi Sitio Web
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            Acerca de Mí
          </Link>
          <Link to="/services" className="hover:text-gray-300">
            Servicios
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contacto
          </Link>
          <Link
            to="/admin/dashboard"
            className="bg-brand-500 hover:bg-brand-600 px-3 py-2 rounded text-sm"
          >
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
