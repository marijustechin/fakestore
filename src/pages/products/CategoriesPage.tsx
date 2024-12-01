import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_CATEGORIES, API_CATEGORY } from '../../helpers/constants';
import { PageTitle } from '../../components/shared/PageTitle';
import { IProduct } from './ProductsPage';
import { useSearchParams } from 'react-router';

export default function CategoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState('');

  console.log(type);
  useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    try {
      const res = await axios.get(API_CATEGORY + type);
      console.log(res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      setError('Nepavyko gauti duomenų');
    }
  }

  return (
    <main className="ms-container">
      <PageTitle>Kategorijos</PageTitle>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.category + product.title}</div>
        ))}
      </div>
    </main>
  );
}
