import React, { useEffect, useRef, useState } from "react"; // Agregado useState
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import {

  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,

  GridIcon,
  ListIcon,

  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,

  HorizontaLDots, // IMPORTADO HorizontaLDots
} from "../icons";
import SidebarWidget from "./SidebarWidget";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
}

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/admin/dashboard", pro: false }], // MODIFICADO
  },
  {
    icon: <CalenderIcon />,
    name: "Calendar",
    path: "/admin/calendar", // MODIFICADO
  },
  {
    icon: <UserCircleIcon />,
    name: "User Profile",
    path: "/admin/profile", // MODIFICADO
  },
  {
    name: "Forms",
    icon: <ListIcon />,
    subItems: [{ name: "Form Elements", path: "/admin/form-elements", pro: false }], // MODIFICADO
  },
  {
    name: "Tables",
    icon: <TableIcon />,
    subItems: [{ name: "Basic Tables", path: "/admin/basic-tables", pro: false }], // MODIFICADO
  },
  {
    name: "Pages",
    icon: <PageIcon />,
    subItems: [
      { name: "Blank Page", path: "/admin/blank", pro: false }, // MODIFICADO
      { name: "404 Error", path: "/admin/error-404", pro: false }, // MODIFICADO (si esta página es parte del admin)
    ],
  },
  {
    name: "Gestión Sitio",
    icon: <PageIcon />,
    subItems: [
      { name: "Inicio", path: "/admin/inicio", pro: false }, // MODIFICADO
      { name: "Acerca de mí", path: "/admin/acerca-de-mi", pro: false }, // MODIFICADO
      { name: "Servicios", path: "/admin/servicios", pro: false }, // MODIFICADO
      { name: "Contactos", path: "/admin/contactos", pro: false }, // MODIFICADO
    ],
  },
];

const othersItems: NavItem[] = [
  {
    icon: <PieChartIcon />,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/admin/line-chart", pro: false }, // MODIFICADO
      { name: "Bar Chart", path: "/admin/bar-chart", pro: false }, // MODIFICADO
    ],
  },
  {
    icon: <BoxCubeIcon />,
    name: "UI Elements",
    subItems: [
      { name: "Alerts", path: "/admin/alerts", pro: false }, // MODIFICADO
      { name: "Avatar", path: "/admin/avatars", pro: false }, // MODIFICADO
      { name: "Badge", path: "/admin/badge", pro: false }, // MODIFICADO
      { name: "Buttons", path: "/admin/buttons", pro: false }, // MODIFICADO
      { name: "Images", path: "/admin/images", pro: false }, // MODIFICADO
      { name: "Videos", path: "/admin/videos", pro: false }, // MODIFICADO
    ],
  },
  {
    icon: <PlugInIcon />,
    name: "Authentication",
    subItems: [
      // Estas rutas usualmente son externas al /admin, así que podrían quedar como están
      // o si son páginas de admin para gestionar usuarios autenticados, también llevarían /admin
      // Por ahora, las dejo como estaban, asumiendo que son las páginas de login/signup públicas.
      // Si son para gestionar usuarios DENTRO del admin, deberían ser /admin/signin-management o algo así.
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const {
    isExpanded,
    isHovered,
    isMobileOpen,
    activeItem,
    setActiveItem,
    openSubmenu, 
    toggleSubmenu, 
    toggleMobileSidebar,
    setIsHovered,
  } = useSidebar();

  const location = useLocation();
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );

  const isActive = (path: string | undefined): boolean => {
    if (!path) return false;
    return location.pathname === path;
    // For prefix matching:
    // return location.pathname.startsWith(path); 
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const findActiveItemProperties = (items: NavItem[]): { activeItemName: string | null, activeSubMenuName: string | null } => {
      for (const item of items) {
        if (item.path === currentPath) {
          return { activeItemName: item.name, activeSubMenuName: null };
        }
        if (item.subItems) {
          for (const subItem of item.subItems) {
            if (subItem.path === currentPath) {
              return { activeItemName: subItem.name, activeSubMenuName: item.name };
            }
          }
        }
      }
      return { activeItemName: null, activeSubMenuName: null };
    };

    let properties = findActiveItemProperties(navItems);
    if (!properties.activeItemName) {
      properties = findActiveItemProperties(othersItems);
    }

    if (typeof setActiveItem === 'function') {
      if (properties.activeItemName) {
        setActiveItem(properties.activeItemName);
      } else if (currentPath === "/admin/dashboard" || currentPath === "/admin") {
        setActiveItem("Ecommerce"); // Default for dashboard
      } else {
        // setActiveItem(null); // Or handle no active item if needed
      }
    }
    
    if (typeof toggleSubmenu === 'function') {
      if (properties.activeSubMenuName) {
        // If a sub-item is active, ensure its parent menu is open
        if (openSubmenu !== properties.activeSubMenuName) {
          toggleSubmenu(properties.activeSubMenuName);
        }
      } else if (currentPath === "/admin/dashboard" || currentPath === "/admin") {
        // If on dashboard, ensure "Dashboard" submenu is open
        if (openSubmenu !== "Dashboard") {
          toggleSubmenu("Dashboard");
        }
      }
      // Note: Closing other submenus when a top-level item is clicked
      // is often handled by the toggleSubmenu logic itself (if it only allows one open at a time)
      // or can be left to user interaction.
    }

    const newHeights: Record<string, number> = {};
    Object.keys(subMenuRefs.current).forEach((key) => {
      const el = subMenuRefs.current[key];
      if (el) {
        newHeights[key] = el.scrollHeight;
      }
    });
    setSubMenuHeight(newHeights);

  }, [location.pathname, setActiveItem, toggleSubmenu, openSubmenu, navItems, othersItems]);


  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSubmenuToggle = (itemName: string) => {
    if (typeof toggleSubmenu === 'function') {
      toggleSubmenu(itemName);
    }
  };

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => ( // index no se usa si identificamos por nav.name
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(nav.name)} // Usar nav.name
              className={`menu-item group ${
                openSubmenu === nav.name // Comprobar si el submenú está abierto por su nombre
                  ? "menu-item-active" // Esta clase podría no ser necesaria para el botón del submenú padre
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size  ${
                  openSubmenu === nav.name || nav.subItems.some(sub => isActive(sub.path)) // Icono activo si submenú abierto o hijo activo
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu === nav.name // Rotar si el submenú está abierto
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                onClick={() => { if (typeof setActiveItem === 'function') setActiveItem(nav.name); }}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                // Usar nav.name como clave única para refs
                subMenuRefs.current[`${menuType}-${nav.name}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu === nav.name // Usar nav.name para la altura
                    ? `${subMenuHeight[`${menuType}-${nav.name}`] || 0}px` // Usar 0 si la altura no está definida
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      onClick={() => { if (typeof setActiveItem === 'function') setActiveItem(subItem.name); }}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/admin/dashboard"> {/* MODIFICADO: Link logo to admin dashboard */}
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <img
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <img
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots className="size-6" />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HorizontaLDots className="size-6" /> /* MODIFICADO: Consistent sizing */
                )}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
