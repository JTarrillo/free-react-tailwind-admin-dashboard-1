import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialsPage.css"; // Importar el archivo CSS

// Placeholder icon for quotes, you can replace with a more specific one
const QuoteIcon = () => (
  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    quote: "Este servicio transformó nuestra manera de trabajar. ¡Increíblemente eficiente y fácil de usar! Lo recomiendo ampliamente.",
    author: "Ana Pérez",
    title: "CEO, InnovaTech",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg" // Placeholder avatar
  },
  {
    id: 2,
    quote: "El equipo detrás de esta plataforma es excepcional. Siempre dispuestos a ayudar y con un soporte técnico de primera.",
    author: "Carlos Gómez",
    title: "Director de Marketing, Soluciones Creativas",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg" // Placeholder avatar
  },
  {
    id: 3,
    quote: "Desde que implementamos esta herramienta, nuestra productividad ha aumentado en un 40%. ¡Una inversión que vale cada centavo!",
    author: "Laura Méndez",
    title: "Gerente de Operaciones, ProActiva",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg" // Placeholder avatar
  },
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false, // Opcional: puedes habilitarlas y estilizarlas
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="testimonials-section-container">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="testimonials-header-title"> 
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Descubre por qué empresas como la tuya confían en nosotros para alcanzar sus objetivos.
          </p>
        </div>

        <div className="testimonial-slider-wrapper"> {/* Nuevo wrapper para el slider */}
          <Slider {...settings}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide-item-outer"> {/* Wrapper para padding del slide */}
                <div
                  className="testimonial-card flex flex-col items-center text-center h-full" // Asegurar altura completa para consistencia
                >
                  <QuoteIcon />
                  <p className="testimonial-quote-text flex-grow"> 
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-brand-500 dark:border-brand-400"
                    />
                    <h4 className="testimonial-author-name"> 
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400"> 
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
