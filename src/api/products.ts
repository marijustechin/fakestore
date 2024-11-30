export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  popular: boolean;
  discount: number;
}

import axios from 'axios';

export const getAllProducts = async (url: string) => {
  try {
    const res = await axios.get<IProduct[]>(url);
    return res.data;
  } catch (error) {}

  return;
};
