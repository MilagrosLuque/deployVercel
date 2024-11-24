"use client";
import { useContext } from "react";
import Orders from "@/components/Orders";
import { UserContext } from "@/context/UserContext";

const Dashboard: React.FC = () => {
  const {userSession, handleLogout} = useContext(UserContext);

  return (
    <div className="bg-smokeWhite min-h-screen p-8">
      <div className="bg-white rounded-md shadow-md p-6 mb-6">
        <h1 className="text-primary text-3xl font-bold mb-4">Mi Perfil</h1>
        <p className="text-grayDark">
          <strong>Nombre:</strong> {userSession?.user.name}
        </p>
        <p className="text-grayDark">
          <strong>Email:</strong> {userSession?.user.email}
        </p>
      </div>

      <div className="bg-white rounded-md shadow-md p-6 mb-6">
        <h2 className="text-primary text-2xl font-semibold mb-4">Mis órdenes</h2>
        <Orders userToken={userSession?.token} />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-danger text-white font-bold py-2 px-4 rounded shadow hover:bg-red-700 transition-all"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
