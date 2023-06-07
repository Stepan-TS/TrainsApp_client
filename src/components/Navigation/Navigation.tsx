import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar">
          <NavLink 
            to="/home"
            className='navbar_field'
          >
            Home
          </NavLink>

          <NavLink 
            to="/newTrain"
            className='navbar_field'
          >
            Add New Train
          </NavLink>
        </div>
      </div>
    </nav>
  );
};