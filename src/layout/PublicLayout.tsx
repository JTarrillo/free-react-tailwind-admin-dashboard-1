import { Outlet } from "react-router-dom";
import PublicHeader from "../components/Public/PublicHeader";
import PublicFooter from "../components/Public/PublicFooter";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet /> {/* Aquí se renderizará el contenido de cada página pública */}
      </main>
      <PublicFooter />
    </div>
  );
}
