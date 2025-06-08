// import PageMeta from "../../components/common/PageMeta"; // Eliminado
import "./ContactPage.css"; // Importar el archivo CSS

// Placeholder icon components (replace with actual icons if available)
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2 text-brand-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2 text-brand-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.031 11.031 0 005.516 5.516l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2 text-brand-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function ContactSection() {
  return (
    // <PageMeta // Eliminado
    //   title="Contacto - Hablemos de Tu Proyecto"
    //   description="Ponte en contacto con nosotros. Estamos listos para ayudarte a alcanzar tus metas."
    // />
    <section id="contact" className="contact-section-container"> {/* Aplicando clase CSS */}
      <div className="container mx-auto px-4"> 
        <div className="text-center mb-12 md:mb-16">
          <h2 className="contact-header-title"> {/* Aplicando clase CSS */}
            Ponte en Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta, idea o proyecto en mente? Nos encantaría
            escucharte. Completa el formulario o utiliza nuestros datos de
            contacto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="contact-form-card"> {/* Aplicando clase CSS */}
            <h3 className="contact-subsection-title"> {/* Aplicando clase CSS */}
              Envíanos un Mensaje
            </h3>
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-form-input" // Aplicando clase CSS
                  placeholder="Tu Nombre"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-form-input" // Aplicando clase CSS
                  placeholder="tu@email.com"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="contact-form-input" // Aplicando clase CSS
                  placeholder="Asunto de tu mensaje"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="contact-form-input" // Aplicando clase CSS
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="contact-form-submit" // Aplicando clase CSS
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-card"> {/* Aplicando clase CSS */}
            <h3 className="contact-subsection-title"> {/* Aplicando clase CSS */}
              Información de Contacto
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              También puedes contactarnos directamente a través de los siguientes
              canales:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <MailIcon />
                <a
                  href="mailto:info@example.com"
                  className="hover:text-brand-600 dark:hover:text-brand-400" // Tailwind para color hover base, CSS para subrayado
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <PhoneIcon />
                <a
                  href="tel:+1234567890"
                  className="hover:text-brand-600 dark:hover:text-brand-400" // Tailwind para color hover base, CSS para subrayado
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <LocationIcon />
                <span>123 Calle Ficticia, Ciudad, País</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3"> 
                Horario de Atención
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Lunes a Viernes: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Sábados: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
