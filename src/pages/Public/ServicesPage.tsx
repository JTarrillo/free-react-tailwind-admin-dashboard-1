// import PageMeta from "../../components/common/PageMeta"; // Eliminado
import { Link } from "react-router-dom"; // Import Link for CTAs

// Placeholder icon component (replace with actual icons if available)
const ServiceIcon = ({ className }: { className?: string }) => (
  <svg
    className={`w-12 h-12 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ></path>
  </svg>
);

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web Moderno",
      description:
        "Creamos sitios web y aplicaciones web responsivas, rápidas y escalables utilizando las últimas tecnologías.",
      icon: (
        <ServiceIcon className="text-brand-500 dark:text-brand-400" />
      ),
    },
    {
      id: 2,
      title: "Diseño UI/UX Creativo",
      description:
        "Diseñamos interfaces intuitivas y atractivas centradas en el usuario para una experiencia excepcional.",
      icon: (
        <ServiceIcon className="text-green-500 dark:text-green-400" />
      ), // Example with different color
    },
    {
      id: 3,
      title: "Consultoría Tecnológica",
      description:
        "Te asesoramos para optimizar tus procesos y adoptar las mejores soluciones tecnológicas para tu negocio.",
      icon: (
        <ServiceIcon className="text-purple-500 dark:text-purple-400" />
      ), // Example with different color
    },
    {
      id: 4,
      title: "Optimización SEO",
      description:
        "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico.",
      icon: (
        <ServiceIcon className="text-yellow-500 dark:text-yellow-400" />
      ), // Example with different color
    },
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // <PageMeta // Eliminado
    //   title="Nuestros Servicios - Soluciones Innovadoras"
    //   description="Explora la gama de servicios que ofrecemos para potenciar tu proyecto digital."
    // />
    <section id="services" className="py-16 bg-white dark:bg-gray-800/30"> {/* Añadido id="services" y cambiado div wrapper a section */}
      <div className="container mx-auto px-4"> {/* Eliminado py-12 md:py-20 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"> {/* Cambiado h1 a h2 */}
            Servicios Diseñados Para Tu Éxito
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ofrecemos un abanico de soluciones personalizadas para ayudarte a
            alcanzar tus objetivos y destacar en el mundo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-4 flex justify-center sm:justify-start">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3"> {/* Cambiado h2 a h3 */}
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                {service.description}
              </p>
              {/* <div className="mt-6 text-center sm:text-left">
                <Link
                  to={`/services/${service.id}`} // Example link to a detailed service page
                  className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium transition-colors duration-300"
                >
                  Saber Más &rarr;
                </Link>
              </div> */} {/* Comentado o eliminar para landing page de una sola página */}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            ¿No encuentras lo que buscas o tienes un proyecto específico en mente?
          </p>
          <a // Cambiado de Link a <a> para scroll suave
            href="#contact"
            onClick={handleScrollToContact}
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 dark:bg-brand-600 dark:hover:bg-brand-700"
          >
            Contáctanos para una Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
