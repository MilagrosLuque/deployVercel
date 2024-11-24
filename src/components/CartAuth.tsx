"use client"
import { ICartProduct } from "@/interfaces/IProduct";
import React, { useContext, useEffect, useState } from "react";
import { Checkout } from "@/api/CheckoutAPI";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";

const CartAuth: React.FC = ()=>{
  const {userSession} = useContext(UserContext);
  const router = useRouter()

  const [cart, setCart] = useState<ICartProduct[]>([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);
  }, []);

  const handleRemoveproduct = (id: string) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  if (cart.length === 0) {
    return <p className="text-center text-lg">Tu carrito está vacío</p>;
  }


  const handleCheckout = async () => {
    const productIds: number[] = cart.map((product) => Number(product.id)); // Convertir id a número
  
    // Llamada directa a la función Checkout
    await Checkout(userSession!.token, productIds); // Se asume que el token existe porque ya verificaste el login
  
    // Vaciar el carrito
    setCart([]); // Actualiza el estado del carrito
    localStorage.removeItem("cart"); // Limpia el carrito en el almacenamiento local
  
    // Redirigir a /home
    router.push("/home");
  };


    return <>
      <section className="bg-white py-8 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900">Carrito de compras</h2>

        {/* products del carrito */}
        <div className="mt-6 space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex products-center justify-between p-4 border rounded-lg shadow-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 object-cover"
              />
              <div className="flex-1 px-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                {/**/}
              </div>
              <button
                onClick={() => handleRemoveproduct(product.id)}
                className="text-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* Resumen del pedido */}
        <div className="mt-6 p-4 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Resumen del pedido</h3>
          <div className="mt-2 flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
            Finalizar compra
          </button>
          <a
            href="/home"
            className="mt-2 text-blue-600 underline block text-center"
          >
            Continuar comprando
          </a>
        </div>
      </div>
    </section>
  
    </>
  }
  export default CartAuth




  