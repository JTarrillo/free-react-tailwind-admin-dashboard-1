import PageMeta from "../../components/common/PageMeta";

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Nuestros Servicios - Mi Sitio Web"
        description="Descubre los servicios que ofrecemos."
      />
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Nuestros Servicios
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-brand-500 mb-2">Servicio 1</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Descripción del servicio 1. Este contenido será administrable.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-brand-500 mb-2">Servicio 2</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Descripción del servicio 2. Este contenido será administrable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
