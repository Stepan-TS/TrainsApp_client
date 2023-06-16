import './Header.scss';
import  logo  from './../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Logo } from './Logo/Logo';

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
        <Logo size='big' isWhite={isHomePage} />
      </NavLink>

      <Navigation onCleareForm={handleClearForm} />
    </header>
  )
}