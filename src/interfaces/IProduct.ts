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
}

export interface ICartProduct {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

  

  export interface IDetailProps {
    params: Promise<{id: string}>
}