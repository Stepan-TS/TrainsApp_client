import { useEffect, useState } from 'react';
import './NewTrain.scss';
import { useNavigate } from 'react-router-dom';
import { ITrain } from '../../types/ITrain';
import { addTrain } from '../../api';
import { ButtonSubmit } from '../../components/Buttons/ButtonSubmit';
import { Message } from './Message';

export const NewTrain = () => {
  const [newTrain, setNewTrain] = useState<ITrain>({
    from_city: "",
    to_city: "",
    departure_time: "",
    arrival_time: "",
    departure_date: "",
    arrival_date: "",
    number: "",
    })

    const [isValidForm, setIsValidForm] = useState(false);
    const [shouldShowMessage, setShouldShowMessage] = useState(false);
    
    useEffect(() => {
      if (newTrain) {
        setShouldShowMessage(false);
      }
    }, [newTrain])
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTrain(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const clear = () => {
      setNewTrain({
        from_city: "",
        to_city: "",
        departure_time: "",
        arrival_time: "",
        departure_date: "",
        arrival_date: "",
        number: "",
      });
    }

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      if (!newTrain.from_city || 
            !newTrain.to_city || 
              !newTrain.departure_time || 
                !newTrain.arrival_time || 
                  !newTrain.departure_date || 
                    !newTrain.arrival_date || 
                      !newTrain.number
        ) {
        setIsValidForm(false)
        setShouldShowMessage(true)
      } else {
        setIsValidForm(true)
        setShouldShowMessage(false)
      }

      try {
        await addTrain(newTrain);
        clear()
      } catch(err) {
      } 
    }

  return (
    <div className='addTrain'>
        <h2>Add new train</h2>
        
        <input className='form-field' type='text' placeholder='from_city' onChange={handleChange} name='from_city' value={newTrain.from_city} required/>
        <input className='form-field' type='text' placeholder='to_city' onChange={handleChange} name='to_city' value={newTrain.to_city} required/>
        <input className='form-field' type='time' placeholder='departure_time' onChange={handleChange} name='departure_time' value={newTrain.departure_time} required/>
        <input className='form-field' type='time' placeholder='arrival_time' onChange={handleChange} name='arrival_time' value={newTrain.arrival_time} required/>
        <input className='form-field' type='date' placeholder='departure_date' onChange={handleChange} name='departure_date' value={newTrain.departure_date} required/>
        <input className='form-field' type='date' placeholder='arrival_date' onChange={handleChange} name='arrival_date' value={newTrain.arrival_date} required/>
        <input className='form-field' type='number' placeholder='number' onChange={handleChange} name='number' value={newTrain.number} required/>
        
        {(!isValidForm && shouldShowMessage) && (
        <Message text='All fields is required!' status={shouldShowMessage}/>)}

        <div className='new-train_btn'>
          <ButtonSubmit onSendData={handleClick} text='Add Train'/>
        </div>
    </div>
  )
}