import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_PRODUCTS } from '../../helpers/constants';
import { PageTitle } from '../../components/shared/PageTitle';
import { IProduct } from './ProductsPage';
import { useParams } from 'react-router';

interface ISingleProductResponse {
  status: string;
  message: string;
  product: IProduct;
}

export default function SingleProductPage() {
  const params = useParams();
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [error, setError] = useState('');

  console.log(params);

  useEffect(() => {
    getProductById(id);
  }, []);

  async function getProductById(id: string | undefined) {
    try {
      if (!id) {
        setError('Nepavyko gauiti prekės ID');
      } else {
        const res = await axios.get<ISingleProductResponse>(
          API_PRODUCTS + `/${id}`
        );
        setProduct(res.data.product);
      }
    } catch (error) {
      setError('Nepavyko gauti duomenų - viena prekė');
    }
  }

  return (
    <main className="ms-container">
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <PageTitle>{product && product.title}</PageTitle>
          <div className="grid grid-cols-12">
            <div className="col-span-2">kazkas</div>
            <div className="col-span-8">
              <div className="flex gap-3">
                <img src={product?.image} alt={product?.title} width={400} />
                <div>{product?.price}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
