import './Field.scss';
import { ICity } from '../../../types/ICity';

type Props = {
  text: string;
  city: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: ICity[];
  onChose: (value: string) => void;
  isDropdown: boolean;
}

export const Field: React.FC<Props> = (props) => {
  const { 
    text, 
    city, 
    onChange, 
    values, 
    onChose,
    isDropdown, 
  } = props;

  return (
    <div className="field">
      <input
        className="field_item"
        type="text"
        placeholder={text}
        value={city}
        onChange={onChange}
        required
      />

      {isDropdown && (
        <div className='dropdown'>
        {values.map(value => (
          <div 
            className='dropdown-row'
            onClick={() => onChose(value.city)}
          >
            {value.city}
          </div>
        ))}
      </div>
      )}
    </div>
  )
}