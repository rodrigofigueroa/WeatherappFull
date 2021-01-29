import React        from 'react'
import PropTypes    from 'prop-types'
import WeatherData  from './../WeatherLocation/WeatherData/'

const ForecastItem = ({ weekDay = 'Lunes', hour = 12, data }) => {
  return(
    <div>
      <h2>{ weekDay } Hour: { hour } hs </h2>
      <WeatherData data={ data } />
    </div>
  )
}

ForecastItem.propTypes = {
  weekDay:  PropTypes.string.isRequired,
  hour:     PropTypes.number.isRequired,
  data:     PropTypes.shape({
    humidity:     PropTypes.number.isRequired,
    wind:         PropTypes.number.isRequired,
    temperature:  PropTypes.number.isRequired,
    weaterState:  PropTypes.string.isRequired
  })
}

export default ForecastItem