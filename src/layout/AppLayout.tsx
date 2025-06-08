import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import Header from "../components/header/Header";
import { useSidebar } from "../context/SidebarContext";

const AppLayout: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* <!-- ===== Sidebar Start ===== --> */}
      <AppSidebar />
      {/* <!-- ===== Sidebar End ===== --> */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
   
        <div className="p-4 mx-auto max-w-screen-2xl md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
