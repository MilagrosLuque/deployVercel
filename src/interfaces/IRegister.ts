export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface IRegisterErrors {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
  }