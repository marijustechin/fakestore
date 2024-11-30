import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="text-center ms-container border-t border-slate-400 mt-5 text-sm py-3">
      Duomenys iš:{' '}
      <Link to="https://fakestoreapi.in/" target="_blank">
        E-commerce Prototyping Made Easy
      </Link>
    </footer>
  );
};
