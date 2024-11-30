import { formatCurrency } from '../helpers/utils';
import { IProduct } from '../pages/products/ProductsPage';

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img className="object-cover" src={product.image} alt={product.title} />
        {product.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-rose-600 px-2 text-center text-sm font-medium text-white">
            {product.discount} % OFF
          </span>
        )}
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href={`/prekes/${product.id}`}>
          <h5 className="text-md tracking-tight text-slate-900">
            {product.title.substring(0, 49) + '...'}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p className="flex gap-2 items-end">
            {product.discount ? (
              <>
                <span className="text-2xl font-bold text-slate-800">
                  {formatCurrency(
                    product.price - (product.price * product.discount) / 100
                  )}
                </span>
                <span className="text-lg text-rose-600 line-through">
                  {formatCurrency(product.price)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-slate-800">
                {formatCurrency(product.price)}
              </span>
            )}
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};
