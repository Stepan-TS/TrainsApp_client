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
  
  const handleClearForm = () => {
    setStartCity('');
    setFinishCity('');
  }
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={isHomePage ? 'header': 'header white'}>
      <NavLink to="/">
        <div className={isHomePage ? 'logo': 'logo logo-black'}>
          <p>TRAVEL</p>
          <p>BY</p>
          <p>TRAIN</p>
        </div>
      </NavLink>

      <Navigation onCleareForm={handleClearForm} />
    </header>
  )
}