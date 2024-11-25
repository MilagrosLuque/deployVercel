import ProductDetail from "@/components/ProductDetail";
import { IProduct } from "@/interfaces/IProduct";

// Función para obtener los productos desde el API
const fetchDataProducts = async (): Promise<IProduct[]> => {
  const res = await fetch("http://localhost:3002/products", {
    next: { revalidate: 1200 },
  });
  const data = await res.json();
  return data;
};

// Función para obtener un producto por su ID
const getProductById = async (id: string): Promise<IProduct> => {
  try {
    const products: IProduct[] = await fetchDataProducts();
    const product = products.find((product) => product.id.toString() === id);

    if (!product) {
      throw new Error("El producto no se encontró");
    }

    return product;
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw error; // Vuelve a lanzar el error para manejarlo donde se llame esta función
  }
};

// Componente de detalle
const Detail = async ({ params }: { params: { id: string } }) => {
  console.log(params); // Verifica que los parámetros sean correctos
  const { id } = params;
  const product = await getProductById(id);

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
};

export default Detail;
