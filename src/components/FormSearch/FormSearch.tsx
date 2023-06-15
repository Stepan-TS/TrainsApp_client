import './FormSearch.scss';

import { ButtonSubmit } from '../Buttons/ButtonSubmit';
import { Field } from './Field';
import { useContext, useEffect, useState } from 'react';
import { ITrain } from './../../types/ITrain';
import axios from 'axios';
import { useSearchParams, NavLink } from 'react-router-dom';
import { getCities } from '../../api';
import { ICity } from '../../types/ICity';
import { AppContext } from '../AppContext';

export const FormSearch = () => {
  const { 
    startCity,
    setStartCity,
    finishCity,
    setFinishCity
  } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams({});
  const [departureCities, setDepartureCities] = useState<ICity[]>([]);
  const [arrivalCities, setArrivalCities] = useState<ICity[]>([]);
  const [shouldShowStartCityDropdown, setShouldShowStartCityDropdown] = useState(false);
  const [shouldShowFinishCityDropdown, setShouldShowFinishCityDropdown] = useState(false);

  useEffect(() => {
    getCities(startCity)
    .then(res => {
      if (Array.isArray(res)) {
        setDepartureCities(res);
      }
    });
  }, [startCity])

  useEffect(() => {
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
    setSearchParams({ 
      startCity: `${startCity}`,
      finishCity: `${finishCity}`
    });
  }

  const NewUrl = `/trains/?startCity=${startCity}&finishCity=${finishCity}`;

  return (
    <div className="form">
      <div className='form_fields'>
        <Field 
          text={'from'} 
          city={startCity}
          onChange={handleChangeStartCity}
          values={departureCities}
          onChose={handleChoseStartCity}
          isDropdown={shouldShowStartCityDropdown}
        />
        
        <Field 
          text={'to'} 
          city={finishCity}
          onChange={handleChangeFinishCity}
          values={arrivalCities}
          onChose={handleChoseFinishCity}
          isDropdown={shouldShowFinishCityDropdown}
        />
      </div>
      
      <NavLink to={NewUrl}>
        <ButtonSubmit onSubmit={handleSearch} text='Search' />
      </NavLink>
    </div>
  )
}