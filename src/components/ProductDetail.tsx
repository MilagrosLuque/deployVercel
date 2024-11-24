/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ICardProps } from "@/interfaces/IProduct"
import { useContext} from "react";
import { UserContext } from "@/context/UserContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const ProductDetail: React.FC<ICardProps> = ({product})=>{
  const router = useRouter();
  const {isLoggedIn } = useContext(UserContext);


  const handleAddToCart = () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "¡Atención!",
        text: "Tienes que estar logueado para agregar productos al carrito.",
        icon: "warning",
        confirmButtonText: "Iniciar sesión",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login"); // Redirige al usuario a la página de inicio de sesión
        }
      });
      return;
    }
  
    // Aquí añadirías la lógica para agregar el producto al carrito.
     // Recuperar el carrito actual
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Buscar si el producto ya está en el carrito
  const productIndex = cart.findIndex((item: { id: number; }): any => item.id === product.id);

  if (productIndex !== -1) {
    Swal.fire({
      title: "¡Producto ya en el carrito!",
      text: "Este producto ya está en tu carrito.",
      icon: "info",
      confirmButtonText: "Aceptar",
    });
      return;
  } else {
    // Agregar el producto al carrito
    cart.push({ ...product, quantity: 1 });
  }

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  Swal.fire({
    title: "¡Producto añadido!",
    text: "El producto se ha añadido a tu carrito.",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  };


    return(<>
        <section className="py-8 bg-white md:py-16 antialiased">
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <img
          className="w-full"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1 className="text-xl font-semibold text-grayDark sm:text-2xl">
        {product.name}
        </h1>
        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
          <p className="text-2xl font-extrabold text-grayDark sm:text-3xl">
          ${product.price}
          </p>
        </div>

        {/* Sección de stock */}
        <div className="mt-4">
          <p className="text-lg font-medium text-grayMedium">
            Stock disponible: <span className="text-grayDark font-semibold">{product.stock}</span>
          </p>
        </div>

        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
        <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="btn mt-4 flex items-center justify-center"
              >
                Añadir al carrito
              </button>
            </div>
        </div>

        <hr className="my-6 md:my-8 border-grayMedium" />

        <p className="mb-6 text-grayMedium">
          {product.description}
        </p>
      </div>
    </div>
  </div>
</section>

    </>)
}

export default ProductDetail