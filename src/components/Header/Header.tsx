import './Header.scss';
import  logo  from './../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation';

export const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <div className={isHomePage ? 'header': 'header-white'}>
      <NavLink to="/">
        <img
          className='header_logo'
          src={logo}
          alt='logo-TravelByTrain'
        />
      </NavLink>

      <Navigation />
    </div>
  )
}