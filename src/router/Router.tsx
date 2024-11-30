import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import NotFound from '../pages/NotFound';
import ProductsPage from '../pages/products/ProductsPage';
import SingleProductPage from '../pages/products/SingleProductPage';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="prekes" element={<ProductsPage />} />
      <Route path="prekes/:id" element={<SingleProductPage />} />
      <Route path="kontaktai" element={<ContactsPage />} />

      {/* Sitas turi buti paskutinis */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const routerLinks = [
  { title: 'Pradžia', href: '/' },
  { title: 'Prekės', href: '/prekes' },
  { title: 'Kontaktai', href: '/kontaktai' },
];
