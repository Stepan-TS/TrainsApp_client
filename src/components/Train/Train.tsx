import { ITrain } from '../../types/ITrain';
import './Train.scss';

type Props = {
  train: ITrain;
}

export const Train: React.FC<Props> = (props) => {
  const {
    from_city,
    to_city,
    departure_time,
    arrival_time,
    departure_date,
    arrival_date,
    number,
  } = props.train;

  const dateOfDeparture = new Date(departure_date).toLocaleDateString();
  const dateOfArrival = new Date(arrival_date).toLocaleDateString();

  return (
    <div className="train">
      <div className='train_info'>
        <p>{number}</p>
      </div>
      
      <div className='train_content'>
        <div className='box'>
          <p className='box_title'>{from_city}</p>
          <p className='box_data'>{dateOfDeparture}</p>
          <p className='box_time'>{departure_time}</p>
        </div>
        
    
        <div className='box'>
          <p className='box_title'>{to_city}</p>
          <p className='box_data'>{dateOfArrival}</p>
          <p className='box_time'>{arrival_time}</p>
        </div>
      </div>
    </div>
  );
}