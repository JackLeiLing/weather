import axios from 'axios'
//http://api.openweathermap.org/data/2.5/forecast?q=Sydney,au&appid=59259bd1cbb33c16826a68ca395a5664
const API_KEY = '59259bd1cbb33c16826a68ca395a5664'
const rootURL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = "fetch_weather"

export function fetchWeather(city){
    const url = `${rootURL}&q=${city},au`;
    const request = axios.get(url);
    
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}