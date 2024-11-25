import ProductDetail from "@/components/ProductDetail";
import { IDetailProps, IProduct } from "@/interfaces/IProduct";
//const APIURL = process.env.API_URL;

const fetchDataProducts = async (): Promise<IProduct[]> =>{
  const res = await fetch( `https://drc116rn-3002.brs.devtunnels.ms/products`,{
    next: { revalidate: 1200 }
  })
  const data = await res.json()
  return data;
}


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

const Detail: React.FC<IDetailProps> = async ({ params }) => {
  const {id: productId} = await params
  const product = await getProductById(productId)
  return (
    <>
      <ProductDetail product={product}/>
    </>
  );
};

export default Detail;
