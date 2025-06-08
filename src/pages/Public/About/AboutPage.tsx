import { Link } from "react-router-dom";
import "./AboutPage.css"; // Importar el archivo CSS

// Placeholder icon components
const MissionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-brand-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A7.986 7.986 0 0112 0c2.986 0 5.857 1.579 7.014 3.986S18 8 18 10c2-1 2.657-1.343 2.657-1.343a8 8 0 01-3.001 10z"
    />
  </svg>
);
const VisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-brand-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);
const ValuesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-brand-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.871 4A17.926 17.926 0 003 12c0 2.874.713 5.59 1.97 7.942M9.903 4.058A17.926 17.926 0 0112 3c2.874 0 5.59.713 7.942 1.97M4.058 14.097A17.926 17.926 0 013 12c0-2.874.713-5.59 1.97-7.942m14.038 15.884A17.926 17.926 0 0112 21c-2.874 0-5.59-.713-7.942-1.97M14.097 19.942A17.926 17.926 0 0012 21c-2.874 0-5.59-.713-7.942-1.97M19.942 9.903A17.926 17.926 0 0021 12c0 2.874-.713 5.59-1.97 7.942M9.903 19.942A17.926 17.926 0 0112 21c2.874 0 5.59-.713 7.942-1.97M19.942 14.097A17.926 17.926 0 0121 12c0-2.874-.713-5.59-1.97-7.942M14.097 4.058A17.926 17.926 0 0012 3c-2.874 0-5.59.713-7.942 1.97"
    />
  </svg>
);

export default function AboutSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section-container"> {/* Aplicando clase CSS y manteniendo Tailwind si es necesario */}
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="about-header-title"> {/* Aplicando clase CSS */}
            Conoce Nuestra Esencia
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Somos un equipo apasionado dedicado a crear soluciones digitales
            impactantes. Creemos en el poder de la tecnología para transformar
            ideas en realidades.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="about-content-card"> {/* Aplicando clase CSS */}
          <div className="mb-10">
            <h3 className="about-subsection-title flex items-center"> {/* Aplicando clase CSS y manteniendo Tailwind para flex */}
              <MissionIcon />
              <span className="ml-3">Nuestra Misión</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Nuestra misión es empoderar a individuos y empresas a través de
              soluciones tecnológicas innovadoras y personalizadas, fomentando el
              crecimiento y la eficiencia en un mundo digital en constante
              evolución. Nos comprometemos a ofrecer productos y servicios de la
              más alta calidad, construidos sobre una base de creatividad,
              integridad y colaboración.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="about-subsection-title flex items-center"> {/* Aplicando clase CSS y manteniendo Tailwind para flex */}
              <VisionIcon /> <span className="ml-3">Nuestra Visión</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Aspiramos a ser líderes reconocidos en el sector tecnológico, siendo
              el socio preferido para aquellos que buscan transformar sus ideas en
              realidades digitales exitosas. Visualizamos un futuro donde la
              tecnología sea accesible y sirva como catalizador para la innovación
              y el progreso sostenible a nivel global.
            </p>
          </div>

          <div>
            <h3 className="about-subsection-title flex items-center"> {/* Aplicando clase CSS y manteniendo Tailwind para flex */}
              <ValuesIcon /> <span className="ml-3">Nuestros Valores</span>
            </h3>
            <ul className="grid md:grid-cols-2 gap-6 text-lg">
              {(
                [
                  "Innovación: Buscamos constantemente nuevas y mejores formas de hacer las cosas.",
                  "Calidad: Nos esforzamos por la excelencia en todo lo que creamos y ofrecemos.",
                  "Colaboración: Creemos en el poder del trabajo en equipo y las alianzas estratégicas.",
                  "Integridad: Actuamos con honestidad y transparencia en todas nuestras interacciones.",
                  "Orientación al Cliente: Ponemos las necesidades de nuestros clientes en el centro de nuestras decisiones.",
                  "Pasión: Amamos lo que hacemos y nos dedicamos a superar las expectativas.",
                ] as const
              ).map((value, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-500 mr-2 mt-1 flex-shrink-0" // Tailwind para el icono
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300"> {/* Tailwind para el texto del valor */}
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            ¿Listo para colaborar con nosotros?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Nos encantaría conocer tu proyecto y explorar cómo podemos ayudarte a
            alcanzar tus objetivos.
          </p>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 dark:bg-brand-600 dark:hover:bg-brand-700" // Tailwind para el botón
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
