import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { type } from 'os';

type Props = {
  onCleareForm: () => void;
}

export const Navigation: React.FC<Props> = ({ onCleareForm }) => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar">
          <NavLink 
            to="/"
            className='navbar_field'
            onClick={onCleareForm}
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