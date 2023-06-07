import './FormSearch.scss';

import { ButtonSubmit } from '../Buttons/ButtonSubmit';
import { Field } from './Field';
import { useEffect, useState } from 'react';
import { ITrain } from './../../types/ITrain';
import axios from 'axios';
import { useSearchParams, NavLink } from 'react-router-dom';
import { getCities } from '../../api';
import { ICity } from '../../types/ICity';

axios.defaults.baseURL = "http://localhost:8080"

export function getTrains(
  city1: string,
  city2: string,
): Promise<ITrain[]> {
  return axios.get(`/trains?city1=${encodeURIComponent(city1)}&city2=${encodeURIComponent(city2)}`)
    .then(res => res.data)
}

export const FormSearch = () => {
  const [startCity, setStartCity] = useState('');
  const [finishCity, setFinishCity] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});

  const [departureCities, setDepartureCities] = useState<ICity[]>([]);
  const [arrivalCities, setArrivalCities] = useState<ICity[]>([]);
  const [shouldShowStartCityDropdown, setShouldShowStartCityDropdown] = useState(false);
  const [shouldShowFinishCityDropdown, setShouldShowFinishCityDropdown] = useState(false);

  useEffect(() => {
    getCities(startCity)
      .then(setDepartureCities);
  }, [startCity])

  useEffect(() => {
    getCities(finishCity)
      .then(setArrivalCities);
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

  const url = `/trains/?startCity=${startCity}&finishCity=${finishCity}`;

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
      
      <NavLink to={url}>
        <ButtonSubmit onSubmit={handleSearch} text='Search' />
      </NavLink>
    </div>
  )
}