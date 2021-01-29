import React                from 'react'
import PropTypes            from 'prop-types'
import WeatherTemperature   from './WeatherTemperature'
import WeatherExtraInfo     from './WeatherExtraInfo'
import './styles.sass'

const WeatherData = ({ data = {
  temperature: 12,
  weatherState: 'normal',
  hunidity: 45,
  wind: 8
} }) => {
  const {
    temperature,
    weatherState,
    humidity,
    wind
  } = data
  return (
    <div className="cont_teamperature_extra_info"> 
      <WeatherTemperature 
        temperature={ temperature } 
        weatherState={ weatherState } 
      />
      <WeatherExtraInfo 
        humidity={ humidity } 
        wind={ wind }
      />
    </div>
  )
}

WeatherData.propTypes = {
  data: PropTypes.shape({
    wind:         PropTypes.number.isRequired,
    temperature:  PropTypes.number.isRequired,
    humidity:     PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
  })
}

export default WeatherData