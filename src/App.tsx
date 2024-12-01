import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import ContactsPage from './pages/ContactsPage';
import SingleProductPage from './pages/products/SingleProductPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="prekes" element={<ProductsPage />}>
            <Route path="kategorija" element={<ProductsPage />} />
          </Route>
          <Route path="prekes/:id" element={<SingleProductPage />} />
          <Route path="kontaktai" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
