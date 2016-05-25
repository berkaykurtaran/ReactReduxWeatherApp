import axios from 'axios';

const API_KEY = 'bdc7fb2563796c0bd3d44c5c2835250b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},tr`;
    const request = axios.get(url);
    console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}