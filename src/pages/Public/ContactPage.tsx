import PageMeta from "../../components/common/PageMeta";

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contacto - Mi Sitio Web"
        description="Ponte en contacto con nosotros."
      />
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Contacto
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Si tienes alguna pregunta o quieres trabajar con nosotros, no dudes en contactarnos.
        </p>
        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
            <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"></textarea>
          </div>
          <button type="submit" className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </>
  );
}
