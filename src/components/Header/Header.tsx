import './Header.scss';
import  logo  from './../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const Header = () => {
  const { 
    startCity,
    setStartCity,
    finishCity,
    setFinishCity
  } = useContext(AppContext);
  const location = useLocation();

  const handleClearForm = () => {
    setStartCity('');
    setFinishCity('');
  }

  const isHomePage = location.pathname === '/';
  return (
    <div className={isHomePage ? 'header': 'header-white'}>
      <NavLink to="/">
        <img
          className='header_logo'
          src={logo}
          alt='logo-TravelByTrain'
          onClick={handleClearForm}
        />
      </NavLink>

      <Navigation onCleareForm={handleClearForm} />
    </div>
  )
}