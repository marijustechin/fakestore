import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
