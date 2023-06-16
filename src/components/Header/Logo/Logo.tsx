import { useContext } from 'react';
import './Logo.scss';
import { AppContext } from '../../AppContext';

type Props = {
  size: string;
  isWhite: boolean;
}

export const Logo: React.FC<Props> = ({ size, isWhite }) => {

  const { 
    setStartCity,
    setFinishCity,
  } = useContext(AppContext);
  
  const handleClearFields = () => {
    setStartCity('');
    setFinishCity('');
  } 

  if (size === 'big') {
    return (
        <div className={isWhite ? 'logo': 'logo logo-black'} onClick={handleClearFields}>
          <p>TRAVEL</p>
          <p>BY</p>
          <p>TRAIN</p>
        </div>
      )
  }

  if (size === 'small') {
    return (
      <div className='logo-black logo-small'>
        <p>TRAVEL BY TRAIN</p>
      </div>
    )
  }

  return null;
}