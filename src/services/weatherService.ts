// src/services/weatherService.ts

import axios from 'axios';

const API_KEY = '3526af477b39f9a0f002e47d5078f48b'; // Replace with your actual key in production

export const getWeather = async (
  lat: number,
  lon: number,
  unit: 'metric' | 'imperial' = 'metric'
) => {
  try {
    let fullPath = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;
    let resp = await axios.get(fullPath)
    console.log(resp?.data);
    
    return resp?.data
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error; // Let the calling component handle the error
  }
};
