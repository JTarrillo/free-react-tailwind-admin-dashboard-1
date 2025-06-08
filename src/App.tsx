import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Asegúrate que es react-router-dom
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import HomeDashboard from "./pages/Dashboard/Home"; // Renombrado para claridad

// Importar páginas de administración del sitio
import InicioAdminPage from "./pages/Site/Inicio";
import AcercaDeMiAdminPage from "./pages/Site/AcercaDeMi";
import ServiciosAdminPage from "./pages/Site/Servicios";
import ContactosAdminPage from "./pages/Site/Contactos";

// Importar Layout y páginas públicas
import PublicLayout from "./layout/PublicLayout";
import HomePage from "./pages/Public/Home/HomePage";
import AboutPage from "./pages/Public/About/AboutPage";
import ServicesPage from "./pages/Public/Services/ServicesPage";
import ContactPage from "./pages/Public/Contact/ContactPage";

// Importar SidebarProvider
import { SidebarProvider } from "./context/SidebarContext";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* MOVER ScrollToTop AQUÍ */}
        <Routes>
          {/* Rutas Públicas */}
          <Route element={<PublicLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Rutas del Panel de Administración */}
          {/* Envolver la ruta de AppLayout con SidebarProvider */}
          <Route
            path="/admin"
            element={
              <SidebarProvider>
                <AppLayout />
              </SidebarProvider>
            }
          >
            <Route index path="dashboard" element={<HomeDashboard />} /> {/* Antigua Home ahora es dashboard */}

            {/* Others Page */}
            <Route path="profile" element={<UserProfiles />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="blank" element={<Blank />} />

            {/* Forms */}
            <Route path="form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="alerts" element={<Alerts />} />
            <Route path="avatars" element={<Avatars />} />
            <Route path="badge" element={<Badges />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="images" element={<Images />} />
            <Route path="videos" element={<Videos />} />

            {/* Charts */}
            <Route path="line-chart" element={<LineChart />} />
            <Route path="bar-chart" element={<BarChart />} />

            {/* Site Management Pages (Admin) */}
            <Route path="inicio" element={<InicioAdminPage />} />
            <Route path="acerca-de-mi" element={<AcercaDeMiAdminPage />} />
            <Route path="servicios" element={<ServiciosAdminPage />} />
            <Route path="contactos" element={<ContactosAdminPage />} />
          </Route>

          {/* Rutas de Autenticación (generalmente no usan AppLayout ni PublicLayout) */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
