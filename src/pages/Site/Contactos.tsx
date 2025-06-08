import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function ContactosPage() {
  return (
    <>
      <PageMeta
        title="Contactos | Admin Dashboard"
        description="Página de Contactos administrable"
      />
      <PageBreadcrumb pageTitle="Contactos" />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Contenido de la Página de Contactos
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Aquí podrás administrar el contenido de la página de contactos.
        </p>
      </div>
    </>
  );
}
