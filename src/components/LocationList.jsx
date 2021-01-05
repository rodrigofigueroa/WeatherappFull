import React            from 'react'
import PropTypes        from 'prop-types'
import WeatherLocation  from './WeatherLocation/';


const LocationList = ({ cities, onLListClick }) => {
  const onLocationListClick = city => {
    console.log( 'onLocationListClick' )
    onLListClick( city )
  }
  const arrayToComponent = cities => {
      return cities.map( 
        ( city, idx ) => (
          <WeatherLocation 
              city={ city } 
              key={ city } 
              onWeatherLocationClick={ () => onLocationListClick( city ) } /> 
        ) )
    }

  return (
    <main>
      { arrayToComponent( cities ) }
    </main>
  )
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onLocationListClick: PropTypes.func
}

export default LocationList