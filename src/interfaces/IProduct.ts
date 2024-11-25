export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICardProps {
    product: IProduct
    // El componente espera un objeto 'product' que sigue la estructura definida en IProduct.
}

export interface ICartProduct {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

  
