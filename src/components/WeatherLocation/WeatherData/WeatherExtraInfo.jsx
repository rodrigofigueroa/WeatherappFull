import React      from 'react'
import PropTypes  from 'prop-types'
import './styles.sass'

const WeatherExtraInfo = ({ humidity = 12, wind = '12' }) => (
  <div className="cont_weather">
    <span>{ `Humedad ${humidity}%` }</span>
    <span>{ `Viento ${wind} m/s` }</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind:     PropTypes.number.isRequired,
}

export default WeatherExtraInfo