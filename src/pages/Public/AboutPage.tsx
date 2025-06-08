import PageMeta from "../../components/common/PageMeta";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="Acerca de Mí - Mi Sitio Web"
        description="Conoce más sobre mí y mi trayectoria."
      />
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Acerca de Mí
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Aquí va la descripción sobre mí, mi experiencia, misión, visión, etc.
          Este contenido será administrable desde el panel de control.
        </p>
      </div>
    </>
  );
}
