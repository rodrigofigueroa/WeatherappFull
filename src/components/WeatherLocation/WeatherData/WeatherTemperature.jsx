import React        from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes    from 'prop-types'
import { 
  CLOUDY,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
  } from '../../../constants/weathers'
import './styles.sass'

const WeatherIconsCheck = props => {
  switch(props){
    case CLOUDY:
      return 'cloudy'
    case RAIN:
      return 'rain'
    case SNOW:
      return 'snow'
    case THUNDER:
      return 'thunderstorm'
    case DRIZZLE:
      return 'day-showers'
    default: 
      return 'cloudy-windy'
  }
}

const WeatherCompState = weatherS => (
  <WeatherIcons 
    name={ WeatherIconsCheck( weatherS ) } 
    size="5x" />
)

const WeatherTemperature = ({ temperature = 12, weatherState = 'clody' }) =>( 
    <div className="cont_temp"> 
      { WeatherCompState( weatherState ) }
      <span>{ `${temperature} C°` }</span>
    </div>
  )

  WeatherTemperature.propTypes = {
    weatherState:  PropTypes.string.isRequired,
    temperature:  PropTypes.number.isRequired,
  }

export default WeatherTemperature