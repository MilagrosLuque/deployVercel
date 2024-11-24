"use client"
import React, { useContext,} from "react";
//import Cookies from "js-cookie";
import CartAuth from "@/components/CartAuth";
//import { IUserSession } from "@/interfaces/ILogin";
import { UserContext } from "@/context/UserContext";

const Cart: React.FC = () => {
  const {isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-semibold text-gray-800">
          Para ver el carrito inicia sesion
        </p>
      </div>
    );
  }

  return (<>
  <CartAuth/>
  </>
  );
};
export default Cart;
