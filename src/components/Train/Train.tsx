import { ITrain } from '../../types/ITrain';
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

  const dateOfDeparture = new Date(departureDate).toLocaleDateString();
  const dateOfArrival = new Date(arrivalDate).toLocaleDateString();

  return (
    <div className="train">
      <div className='train_info'>
        <p>{trainNumber}</p>
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