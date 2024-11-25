import { IProduct } from "@/interfaces/IProduct";
import Swal from "sweetalert2";

export const fetchDataProducts = async (): Promise<IProduct[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      next: { revalidate: 1200 },
    })
    if (!res.ok) {
      throw new Error
    }
    return res.json();
  } catch (error) {
    console.error(error);

    Swal.fire({
      title: "Error",
      text: "Hubo un problema para cargar los productos",
      icon: "error",
      confirmButtonText: "Aceptar",
    });

    return [];
  }
};

export default fetchDataProducts;
