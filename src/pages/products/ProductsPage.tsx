import { useEffect, useState } from 'react';
import { API_PRODUCTS } from '../../helpers/constants';
import axios from 'axios';
import { PageTitle } from '../../components/shared/PageTitle';
import { ProductCard } from '../../components/ProductCard';

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

export interface IApiResponse {
  status: string;
  message: string;
  products: IProduct[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts(API_PRODUCTS);
    setLoading(false);
  }, []);

  const getAllProducts = async (url: string) => {
    try {
      const res = await axios.get<IApiResponse>(url);
      setProducts(res.data.products);
    } catch (error) {
      setError('Nepavyko gauti duomenų');
    }
  };

  return (
    <main className="ms-container">
      <PageTitle>Prekės</PageTitle>
      {loading && <div>rodom spineri kazkoki</div>}
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="grid grid-cols-12 gap-2">
          <aside className="col-span-2">cia filtrai</aside>
          <section className="col-span-8">
            <div className="grid grid-cols-3 gap-3">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
