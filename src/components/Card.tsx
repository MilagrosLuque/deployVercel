import { ICardProps } from "@/interfaces/IProduct";
import Link from "next/link";


const Card: React.FC<ICardProps> = ({ product }) => {
  return (
<Link
        href={`/product/${product.id}`}
        className="bg-white border border-grayLight rounded-lg shadow-lg p-4 flex flex-col items-center text-center w-full h-[450px] hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-2/3 object-contain rounded-t-lg mb-4" 
      />

      <div className="flex flex-col items-center mt-4">

        <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>

        <p className="text-primary text-lg font-bold">${product.price}</p>
      </div>

    </Link>
  );
};

export default Card;
