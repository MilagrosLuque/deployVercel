import fetchDataProducts from "@/api/ProductsAPI";
import Card from "@/components/Card";
import { IProduct } from "@/interfaces/IProduct";

const CardList: React.FC = async () => {
  const fetchProducts = await fetchDataProducts()

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {fetchProducts.map((product: IProduct) => (
        <div key={product.id} className="flex justify-center">
          <Card product={product} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
