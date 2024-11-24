import { useEffect, useState } from "react";
import { GetOrders } from "@/api/GetOrdersAPI";
import { IProduct } from "@/interfaces/IProduct";

interface IOrder {
  id: number;
  status: string;
  date: Date;
  products: IProduct[];
}

interface IOrdersProps {
  userToken?: string;
}

const Orders: React.FC<IOrdersProps> = ({ userToken }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userToken) return;
        const fetchedOrders = await GetOrders(userToken);
        setOrders(fetchedOrders);
    };

    fetchOrders();
  }, [userToken]);

  if (orders.length === 0) {
    return <p className="text-grayDark text-center">No tienes órdenes todavía.</p>;
  }

  return (
    //modularizar orderCard
    <div className="bg-smokeWhite p-6 rounded-md shadow-md">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white border border-grayMedium rounded-md p-4 mb-4 shadow hover:shadow-lg transition-shadow"
        >
          <p className="text-primary font-bold">
            <strong>Orden ID:</strong> {order.id}
          </p>
          <p className="text-grayDark">
            <strong>Estado: </strong>{order.status.toLocaleUpperCase()}
          </p>
          <p className="text-grayDark">
            <strong>Fecha:</strong> {new Date(order.date).toLocaleDateString()}
          </p>
          <p className="text-grayDark">
            <strong>Productos:</strong>
          </p>
          <ul className="list-disc pl-5 text-black">
            {order.products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Orders;
