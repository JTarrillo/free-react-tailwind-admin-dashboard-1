import PageMeta from "../../../components/common/PageMeta";
// import { Link } from "react-router-dom"; 
import AboutSection from "../About/AboutPage"; 
import ServicesSection from "../Services/ServicesPage"; 
import ContactSection from "../Contact/ContactPage"; 
import TestimonialsSection from "../Testimons/TestimonialsPage"; 
import "./HomePage.css"; 

export default function HomePage() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageMeta
        title="Ailife Style - Get Quality & 10x Faster Way To Write Testimonials"
        description="Ai Gen is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!"
      />

      {/* Hero Section - Ailife Style */}
      <section id="home" className="relative py-20 md:py-28 lg:py-32 xl:py-40 hero-section overflow-hidden"> 
        {/* Decorative elements will use existing classes, animation applied via CSS */}
        <div className="absolute top-0 left-0 w-64 h-64 hero-decorative-pink"></div> 
        <div className="absolute bottom-0 right-0 w-72 h-72 hero-decorative-blue"></div> 

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
            Get Quality & 10x Faster Way To <br className="hidden md:block" /> Write{" "}
            <span className="hero-title-gradient"> 
              Testimonials
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Ai Gen is an AI writing assistant that helps you create high-quality content, in just a few
            seconds, at a fraction of the cost!
          </p>
          <div className="flex justify-center">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              // Nota: Este gradiente del botón es un buen candidato para permanecer como clases de Tailwind
              // ya que es interactivo (hover:) y conciso. Extraerlo a CSS sería más complejo.
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section (Why Choose Us) */}
      <section className="features-section"> {/* Aplicando clase CSS para el fondo y padding */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white"> {/* Manteniendo Tailwind para título principal de sección */}
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2"> {/* Manteniendo Tailwind para subtítulo */}
              Comprometidos con la excelencia y la innovación.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card"> {/* Aplicando clase CSS */}
              <div className="feature-icon-container"> {/* Aplicando clase CSS */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto" /* Tailwind para tamaño y centrado del SVG */
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="feature-card-title"> {/* Aplicando clase CSS */}
                Innovación Constante
              </h3>
              <p className="feature-card-description"> {/* Aplicando clase CSS */}
                Nos mantenemos a la vanguardia de la tecnología para ofrecerte lo
                mejor.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card"> {/* Aplicando clase CSS */}
              <div className="feature-icon-container"> {/* Aplicando clase CSS */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto" /* Tailwind para tamaño y centrado del SVG */
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="feature-card-title"> {/* Aplicando clase CSS */}
                Resultados Garantizados
              </h3>
              <p className="feature-card-description"> {/* Aplicando clase CSS */}
                Soluciones efectivas que cumplen y superan tus expectativas.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card"> {/* Aplicando clase CSS */}
              <div className="feature-icon-container"> {/* Aplicando clase CSS */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto" /* Tailwind para tamaño y centrado del SVG */
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="feature-card-title"> {/* Aplicando clase CSS */}
                Soporte Dedicado
              </h3>
              <p className="feature-card-description"> {/* Aplicando clase CSS */}
                Estamos aquí para ayudarte en cada paso del camino.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection /> 
      <ServicesSection />
      <AboutSection />
      <ContactSection />

      {/* Final Call to Action Section (Optional, can be removed if redundant) */}
      <section className="py-16 final-cta-section"> 
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para Empezar Tu Próximo Gran Proyecto?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            No esperes más para llevar tu idea al siguiente nivel. Contáctanos hoy
            mismo y hagamos algo increíble juntos.
          </p>
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="bg-white text-brand-600 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 dark:text-brand-500 dark:hover:bg-gray-200"
          >
            Hablemos de Tu Proyecto
          </a>
        </div>
      </section>
    </>
  );
}
