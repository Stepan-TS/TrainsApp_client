import './FormSearch.scss';

import { ButtonSubmit } from '../Buttons/ButtonSubmit';
import { Field } from './Field';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { getCities } from '../../api';
import { ICity } from '../../types/ICity';
import { AppContext } from '../AppContext';

export const FormSearch = () => {
  const { 
    startCity,
    setStartCity,
    finishCity,
    setFinishCity,
    setShouldShowForm,
  } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams({});
  const [departureCities, setDepartureCities] = useState<ICity[]>([]);
  const [arrivalCities, setArrivalCities] = useState<ICity[]>([]);
  const [shouldShowStartCityDropdown, setShouldShowStartCityDropdown] = useState(false);
  const [shouldShowFinishCityDropdown, setShouldShowFinishCityDropdown] = useState(false);
  const [shouldShowMessage, setShouldShowMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShouldShowMessage(false);

    getCities(startCity)
    .then(res => {
      if (Array.isArray(res)) {
        setDepartureCities(res);
      }
    });
  }, [startCity])

  useEffect(() => {
    setShouldShowMessage(false);
    
    getCities(finishCity)
    .then(res => {
      if (Array.isArray(res)) {
        setArrivalCities(res);
      }
    });
  }, [finishCity])

  useEffect(() => {
    const checkIsStartCityInputEmpty = startCity === '';
    const checkIsFinishCityInputEmpty = finishCity === '';

    if (checkIsStartCityInputEmpty) {
      setShouldShowStartCityDropdown(false);
    }

    if (checkIsFinishCityInputEmpty) {
      setShouldShowFinishCityDropdown(false);
    }
  }, [startCity, finishCity])
  
  const handleChangeStartCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartCity(event.target.value);
    setShouldShowStartCityDropdown(true);
  }

  const handleChangeFinishCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinishCity(event.target.value);
    setShouldShowFinishCityDropdown(true);
  }
  
  const handleChoseStartCity = (value: string) => {
    setStartCity(value);
    setShouldShowStartCityDropdown(false);
  }

  const handleChoseFinishCity = (value: string) => {
    setFinishCity(value);
    setShouldShowFinishCityDropdown(false);
  }

  const handleSearch = (event: React.FormEvent) => {
    if (!startCity || !finishCity) {
      setShouldShowMessage(true);
    } else {
      setSearchParams({ 
        startCity: `${startCity}`,
        finishCity: `${finishCity}`
      });
  
      navigate(`${NewUrl}`);
      setShouldShowForm(false);
    }
  }

  const NewUrl = `/trains/?startCity=${startCity}&finishCity=${finishCity}`;

  return (
    <div className='form'>
      <div className='form_fields'>
        <Field 
          text={'Enter departure city'} 
          city={startCity}
          onChange={handleChangeStartCity}
          values={departureCities}
          onChose={handleChoseStartCity}
          isDropdown={shouldShowStartCityDropdown}
        />
        
        <Field 
          text={'Enter arrival city'} 
          city={finishCity}
          onChange={handleChangeFinishCity}
          values={arrivalCities}
          onChose={handleChoseFinishCity}
          isDropdown={shouldShowFinishCityDropdown}
        />

      </div>
      
      {shouldShowMessage && (
        <div className='form_message'>
          <h2>You must enter two fields!</h2>
        </div>
      )}
      
      <ButtonSubmit onSubmit={handleSearch} text='Search' />
    </div>
  )
}