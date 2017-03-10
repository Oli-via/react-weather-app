//axios是专门发送ajax请求的库，用法类似jquery
import axios from 'axios'

const APP_ID = 'f111ffa26171f10eeaefeb43d7a5755d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${APP_ID}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

//此处要写函数名
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},cn`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}