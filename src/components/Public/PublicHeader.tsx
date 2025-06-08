import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Placeholder para el logo, puedes reemplazarlo con tu SVG o componente de imagen
const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    {/* Ejemplo de SVG simple como logo, reemplaza con tu logo real */}
    <svg
      className="h-8 w-auto text-blue-600 dark:text-blue-400"
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0zm0 86.364c-20.07 0-36.364-16.293-36.364-36.364S29.93 13.636 50 13.636s36.364 16.293 36.364 36.364S70.07 86.364 50 86.364z" />
      <circle cx="50" cy="50" r="18.182" />
    </svg>
    <span className="text-2xl font-bold text-gray-800 dark:text-white">
      Ailife
    </span>
  </Link>
);

// Componente para enlaces con scroll suave
const ScrollLink = ({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: () => void }) => {
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = to.substring(1); // Remove #
    
    if (location.pathname !== "/") {
      // Si no estamos en la HomePage, primero navegamos a ella y luego intentamos el scroll
      // Esto es una simplificación; un manejo más robusto podría usar state o query params
      window.location.href = `/${to}`; // Navega a la home y el navegador intentará ir al ancla
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (onClick) {
      onClick();
    }
  };

  // Si estamos en una página diferente a la Home, el Link de react-router-dom es más apropiado para navegar primero.
  // O, para simplificar, siempre usamos el ancla y dejamos que el navegador maneje el scroll si ya está en la página.
  // La lógica de handleScroll ya intenta manejar esto.

  return (
    <a href={to} onClick={handleScroll} className={className}>
      {children}
    </a>
  );
};


export default function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "#home", label: "Inicio" }, // #home para la sección Hero
    { to: "#about", label: "Acerca de" }, 
    { to: "#services", label: "Servicios" }, 
    { to: "#contact", label: "Contacto" },   
  ];

  return (
    <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm fixed w-full z-50 top-0">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1"> {/* Reducido space-x-1 o 2 para más items */}
            {navLinks.map((link) => (
              <ScrollLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </ScrollLink>
            ))}
            <Link // Este sigue siendo un Link de react-router-dom porque va a una ruta diferente
              to="/admin/dashboard" 
              className="ml-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {link.label}
              </ScrollLink>
            ))}
            <Link
              to="/admin/dashboard" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 text-center"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
