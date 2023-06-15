import { FormEvent, useState } from 'react';
import './NewTrain.scss';
import { ITrain } from '../../types/ITrain';
import { addTrain } from '../../api';
import { ButtonSubmit } from '../../components/Buttons/ButtonSubmit';
import { SuccessModal } from './SuccessModal';
import { Message } from './Message';

export const NewTrain = () => {
  const [newTrain, setNewTrain] = useState<ITrain>({
    departureCity: "",
    arrivalCity: "",
    departureTime: "",
    arrivalTime: "",
    departureDate: "",
    arrivalDate: "",
    trainNumber: "",
    })

    const [shouldShowMessage, setShouldShowMessage] = useState(false);
    const [shouldShowModal, setShouldShowModal] = useState(false);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTrain(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const clear = () => {
      setNewTrain({
        departureCity: "",
        arrivalCity: "",
        departureTime: "",
        arrivalTime: "",
        departureDate: "",
        arrivalDate: "",
        trainNumber: "",
      });
    }

    const handleClick = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        await addTrain(newTrain);
        clear()
        setShouldShowModal(true)
      } catch(err) {
        setShouldShowMessage(true);
      } 
    }

    const handleCloseModal = () => {
      setShouldShowModal(false);
    }

  return (
    <div className='addTrain'>
        {shouldShowModal && (
          <SuccessModal onClose={handleCloseModal} />
        )}

        <h2>Add new train</h2>

        <form onSubmit={handleClick}>
          <input className='form-field' type='text' placeholder='from_city' onChange={handleChange} name='departureCity' value={newTrain.departureCity} required />
          <input className='form-field' type='text' placeholder='to_city' onChange={handleChange} name='arrivalCity' value={newTrain.arrivalCity} required />
          <input className='form-field' type='date' placeholder='departure_date' onChange={handleChange} name='departureDate' value={newTrain.departureDate} required />
          <input className='form-field' type='date' placeholder='arrival_date' onChange={handleChange} name='arrivalDate' value={newTrain.arrivalDate} required />
          <input className='form-field' type='time' placeholder='departure_time' step="1" onChange={handleChange} name='departureTime' value={newTrain.departureTime} required />
          <input className='form-field' type='time' placeholder='arrival_time' step="1" onChange={handleChange} name='arrivalTime' value={newTrain.arrivalTime} required />
          <input className='form-field' type='number' placeholder='number' onChange={handleChange} name='trainNumber' value={newTrain.trainNumber} required />

          <div className='new-train_btn'>
            <ButtonSubmit text='Add Train'/>
          </div>
        </form>

        {shouldShowMessage && (
          <Message text='An error occurred while adding the train!' />
        )}
    </div>
  )
}