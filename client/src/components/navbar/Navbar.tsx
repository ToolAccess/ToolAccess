import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  category: string | undefined;
  product?: string;
}

const Navbar = ({ category, product }: NavbarProps) => {
  const encodedCategory = encodeURIComponent(category || '');

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        {category && (
          <li className="navbar__item">
            <Link
              to={`/category/${encodedCategory}`}
              className="navbar__link"
              style={product ? { marginRight: '8px' } : { backgroundColor: 'gray', color: 'white', padding: '4px 8px', borderRadius: '4px' }}
            >
              {category}
            </Link>
          </li>
        )}
        {product && (
          <li className="navbar__item">
          <span className="navbar__product">{product}</span>
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
