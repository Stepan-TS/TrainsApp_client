import { useLocation } from "react-router-dom";
import './Logo.scss';

type Props = {
  size: string;
  isWhite: boolean;
}

export const Logo: React.FC<Props> = ({ size, isWhite }) => {
  
  if (size === 'big') {
    return (
        <div className={isWhite ? 'logo': 'logo logo-black'}>
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