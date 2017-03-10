import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
  renderWeather(cityData){  //cityData就是this.props.weather数组里遍历出来的每一个城市对象
    const name = cityData.city.name
    // map方法返回的是数组形式的结果集
    const temps = cityData.list.map(weather => weather.temp.eve - 273.13)
    const pressure = cityData.list.map(weather => weather.pressure)
    const humidity = cityData.list.map(weather => weather.humidity)
    // 以下一行等于：
    // const lon = cityData.city.coords.lon
    // const lat = cityData.city.coords.lat
    const { lon, lat} = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="red" unit="℃"/></td>
        <td><Chart data={pressure} color="blue" unit="hPa"/></td>
        <td><Chart data={humidity} color="orange" unit="%"/></td>
      </tr>
    )
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(℃)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return ({weather})  //这里的weather就是root reducer里的weather
}
//以上写法是以下的简写：
/*
 function mapStateToProps(state) {
  const weather = state.weather
  return ({weather: weather})
}
 */

export default connect(mapStateToProps)(WeatherList)