"use client";

import Link from "next/link";
import { useContext } from "react";
import NavbarAuth from "./NavbarAuth";
import NavbarGuest from "./NavbarGuest";
import { UserContext } from "@/context/UserContext";

const Navbar: React.FC = () => {
  // Accede al contexto
  const { userSession } = useContext(UserContext);

  return (
    <nav className="bg-primary text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo o nombre de la tienda */}
        <div className="text-2xl font-bold">
          <Link href="/">Apple Store</Link>
        </div>

        {/* Enlaces de navegación */}
        <div className="space-x-6">
          <Link href="/home">
            <span className="text-white hover:text-grayLight">Inicio</span>
          </Link>
          {/* Renderizado condicional */}
          {userSession ? <NavbarAuth /> : <NavbarGuest />}
        </div>

        {/* Botón de llamada a la acción */}
        <div>
          <Link href="/cart">
            <button className="btn-secondary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7146 19.5C10.7146 20.3284 10.0239 21 9.17176 21C8.31967 21 7.62891 20.3284 7.62891 19.5"
                  stroke="black"
                  strokeWidth="null"
                  strokeLinecap="round"
                  className="my-path"
                ></path>
                <path
                  d="M16.8865 19.5C16.8865 20.3284 16.1957 21 15.3436 21C14.4915 21 13.8008 20.3284 13.8008 19.5"
                  stroke="black"
                  strokeWidth="null"
                  strokeLinecap="round"
                  className="my-path"
                ></path>
                <path
                  d="M3.51429 6L4.96114 13.7354C5.25319 15.2968 5.39921 16.0775 5.95475 16.5387C6.51029 17 7.30451 17 8.89296 17H15.6218C17.2103 17 18.0046 17 18.5601 16.5387C19.1157 16.0774 19.2617 15.2967 19.5537 13.7352L20.1146 10.7352C20.5248 8.54152 20.7299 7.44469 20.1301 6.72234C19.5303 6 18.4144 6 16.1827 6H3.51429ZM3.51429 6L3 3"
                  stroke="black"
                  strokeWidth="null"
                  strokeLinecap="round"
                  className="my-path"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
