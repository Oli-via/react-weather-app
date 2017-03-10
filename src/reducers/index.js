import { combineReducers } from 'redux';
import fetchWeather from './weather'

const rootReducer = combineReducers({
  // state: (state = {}) => state   //初始化写法
  weather: fetchWeather
});

export default rootReducer;