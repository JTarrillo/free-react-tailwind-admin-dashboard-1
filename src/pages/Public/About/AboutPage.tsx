import { Link } from "react-router-dom";
import "./AboutPage.css"; 

// Iconos para la línea de tiempo y valores
const TimelineMissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
  </svg>
);
const TimelineVisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ValueItemIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

  const timelineData = [
    {
      id: "mission",
      title: "Nuestra Misión",
      text: "Empoderar a individuos y empresas con soluciones tecnológicas innovadoras y personalizadas, fomentando crecimiento y eficiencia en el mundo digital. Calidad, creatividad, integridad y colaboración son nuestra base.",
      icon: <TimelineMissionIcon />,
      brandColor: "#3B82F6", // blue-500
      cardBgLight: "#ffffff",
      cardBgDark: "#2d3748", // slate-800
    },
    {
      id: "vision",
      title: "Nuestra Visión",
      text: "Ser líderes tecnológicos y el socio preferido para transformar ideas en realidades digitales exitosas. Visualizamos un futuro con tecnología accesible que impulse la innovación y el progreso sostenible global.",
      icon: <TimelineVisionIcon />,
      brandColor: "#10B981", // green-500
      cardBgLight: "#ffffff",
      cardBgDark: "#2d3748",
    },
  ];

  const valuesData = [
    { title: "Innovación", text: "Buscamos constantemente nuevas y mejores formas de hacer las cosas.", brandColorRGB: "99, 102, 241" },
    { title: "Calidad", text: "Nos esforzamos por la excelencia en todo lo que creamos y ofrecemos.", brandColorRGB: "22, 163, 74" },
    { title: "Colaboración", text: "Creemos en el poder del trabajo en equipo y las alianzas estratégicas.", brandColorRGB: "219, 39, 119" },
    { title: "Integridad", text: "Actuamos con honestidad y transparencia en todas nuestras interacciones.", brandColorRGB: "245, 158, 11" },
    { title: "Orientación al Cliente", text: "Ponemos las necesidades de nuestros clientes en el centro de nuestras decisiones.", brandColorRGB: "59, 130, 246" },
    { title: "Pasión", text: "Amamos lo que hacemos y nos dedicamos a superar las expectativas.", brandColorRGB: "139, 92, 246" },
  ];

  return (
    <section id="about" className="about-section-container">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="about-header-title"> 
            Nuestra Trayectoria
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un vistazo a nuestra historia, valores y la visión que nos impulsa hacia el futuro.
          </p>
        </div>

        <div className="about-main-card">
          {/* Timeline Section */}
          <div className="timeline-container">
            {timelineData.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-item-icon-wrapper" style={{ backgroundColor: item.brandColor }}>
                  {item.icon}
                </div>
                <div className="timeline-item-content-wrapper">
                  <div 
                    className="timeline-item-content" 
                    style={{ '--timeline-card-bg': `var(--timeline-card-bg-${item.id})` } as React.CSSProperties}
                  >
                    {/* Definir variables CSS para fondos específicos de tarjeta si es necesario, o usar clases */}
                    <style>
                      {`
                        :root {
                          --timeline-card-bg-${item.id}: ${item.cardBgLight};
                        }
                        .dark {
                          --timeline-card-bg-${item.id}: ${item.cardBgDark};
                        }
                      `}
                    </style>
                    <h3 className="timeline-item-title" style={{ color: item.brandColor }}>{item.title}</h3>
                    <p className="timeline-item-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Valores Section */}
          <div className="about-values-section-wrapper">
            <div className="about-values-title-section">
                <h3 className="about-values-title">Principios Fundamentales</h3>
            </div>
            <div className="about-values-grid">
              {valuesData.map((value, index) => (
                <div key={index} className="about-value-card" style={{ '--brand-color-rgb': value.brandColorRGB } as React.CSSProperties}>
                  <div className="about-value-card-icon" style={{ color: `rgb(${value.brandColorRGB})`, backgroundColor: `rgba(${value.brandColorRGB}, 0.1)`}}>
                    <ValueItemIcon />
                  </div>
                  <h4 className="about-value-card-title">{value.title}</h4>
                  <p className="about-value-card-text">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            ¿Listo para construir el futuro juntos?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Nos encantaría conocer tu proyecto y explorar cómo podemos ayudarte a
            alcanzar tus objetivos.
          </p>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 dark:bg-brand-600 dark:hover:bg-brand-700" 
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
