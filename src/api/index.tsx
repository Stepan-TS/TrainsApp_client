import { ITrain } from "../types/ITrain";
import axios from 'axios';

axios.defaults.baseURL = "https://travelbytrain.onrender.com";

export function getCities(query: string) {
  return axios.get(`/?city=${encodeURIComponent(query)}`)
    .then(res => res.data)
}

export function getAllTrains(): Promise<ITrain[]> {
  return axios.get('/trains')
    .then(res => res.data.trains)
}

export function getTrains(
  city1: string,
  city2: string,
): Promise<ITrain[]> {
  return axios.get(`/trains?city1=${encodeURIComponent(city1)}&city2=${encodeURIComponent(city2)}`)
    .then(res => res.data.trains)
}

export function getOtherDaysTrains(
  city1: string,
  city2: string,
): Promise<ITrain[]> {
  return axios.get(`/trainOther?city1=${encodeURIComponent(city1)}&city2=${encodeURIComponent(city2)}`)
    .then(res => res.data)
}

export function addTrain(train: ITrain): Promise<ITrain[]> {
  return axios.post('/newTrain', train);
}