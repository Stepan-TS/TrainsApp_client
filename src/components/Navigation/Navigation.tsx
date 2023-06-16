import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.scss';
import { type } from 'os';

type Props = {
  onCleareForm: () => void;
}

export const Navigation: React.FC<Props> = ({ onCleareForm }) => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar">
          <NavLink 
            to="/"
            className={isHomePage ? 'navbar_field': 'navbar_field field-black'}
            onClick={onCleareForm}
          >
            Home
          </NavLink>

          <NavLink 
            to="/newTrain"
            className={isHomePage ? 'navbar_field': 'navbar_field field-black'}
          >
            Add New Train
          </NavLink>
        </div>
      </div>
    </nav>
  );
};