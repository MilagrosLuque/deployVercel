"use client"
import { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { IUserSession } from "@/interfaces/ILogin";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


interface UserContextType {
  userSession: IUserSession | null;
  isLoggedIn: boolean;
  initializeUserSession: () => void;
  handleLogout: () => Promise<void>;
}

// Crear el contexto con un valor inicial vacío
export const UserContext = createContext<UserContextType>({
  userSession: null,
  isLoggedIn: false,
  initializeUserSession: () => {},
  handleLogout: async () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userSession, setUserSession] = useState<IUserSession | null>(null);
  const router = useRouter();

  const initializeUserSession = () => {
    const dataCookie = Cookies.get("loginData");
    if (dataCookie) {
      const parsedData: IUserSession = JSON.parse(dataCookie);
      setUserSession(parsedData);
    } else {
      setUserSession(null);
    }
  };

  const handleLogout = async () => {
    Cookies.remove("loginData");
    await Swal.fire({
      icon: "success",
      title: "Cerraste sesión correctamente",
      text: "Redirigiendo al inicio...",
      timer: 2000,
      showConfirmButton: false,
    });

    router.push("/home");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    initializeUserSession();
  }, []);

  const value = {
    userSession,
    isLoggedIn: !!userSession,
    initializeUserSession, // Esta función se puede usar desde cualquier parte
    handleLogout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
