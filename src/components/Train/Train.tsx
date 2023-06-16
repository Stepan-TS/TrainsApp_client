import { ITrain } from '../../types/ITrain';
import { Logo } from '../Header/Logo/Logo';
import './Train.scss';

type Props = {
  train: ITrain;
}

export const Train: React.FC<Props> = (props) => {
  const {
    departureCity,
    arrivalCity,
    departureTime,
    arrivalTime,    
    departureDate,
    arrivalDate,
    trainNumber,
  } = props.train;

  console.log(trainNumber);

  const dateOfDeparture = new Date(departureDate).toLocaleDateString();
  const dateOfArrival = new Date(arrivalDate).toLocaleDateString();

  return (
    <div className="train">
      <div className='train_info'>
        <div className='train_info-logo'>
          <Logo size='small' isWhite={false} />
        </div>
        
        <p className='train_info-number'>{trainNumber}</p>
      </div>
      
      <div className='train_content'>
        <div className='box'>
          <p className='box_title'>{departureCity}</p>
          <p className='box_data'>{dateOfDeparture}</p>
          <p className='box_time'>{departureTime}</p>
        </div>
        
    
        <div className='box'>
          <p className='box_title'>{arrivalCity}</p>
          <p className='box_data'>{dateOfArrival}</p>
          <p className='box_time'>{arrivalTime}</p>
        </div>
      </div>
    </div>
  );
}