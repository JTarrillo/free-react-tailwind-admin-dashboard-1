import PageMeta from "../../components/common/PageMeta";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Bienvenido a Mi Sitio Web"
        description="Esta es la página de inicio de mi increíble sitio web."
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          ¡Bienvenido a Mi Sitio Web!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explora nuestros servicios y conoce más sobre nosotros.
        </p>
      </div>
    </>
  );
}
