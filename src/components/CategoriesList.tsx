import { useEffect, useState } from 'react';
import { API_CATEGORIES } from '../helpers/constants';
import axios from 'axios';
import { Link } from 'react-router';

export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    try {
      const res = await axios.get(API_CATEGORIES);
      setCategories(res.data.categories);
    } catch (error) {
      setError('Nepavyko gauti duomenų');
    }
  }

  return (
    <div>
      <h2>Prekių kategorijos</h2>
      {error && <p>Nepavyko gauti kateforijų sąrašo</p>}
      <ul className="pl-3 py-2">
        <Link to={'/prekes'}>
          <li
            className={`type ? "text-slate-900 hover:bg-slate-500 hover:text-slate-50": "bg-slate-500" py-1 px-2 rounded-md border`}
          >
            Rodyti visas
          </li>
        </Link>
        {categories.map((cat) => (
          <Link key={cat} to={`kategorija?type=${cat}`}>
            <li className="py-1 px-2 rounded-md hover:bg-slate-500 hover:text-slate-50">
              {cat}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
