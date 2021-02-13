import React            from 'react'
import Skeleton         from '@material-ui/lab/Skeleton'
import PropTypes        from 'prop-types'
import Location         from './Location'
import WeatherData      from './WeatherData/'
import transformWeather from '../../services/transformWeather'
import './styles.sass'

const KEY = `f8257f21948f8e7cd332a4a95c01c558`
const URL = `https://api.openweathermap.org/data/2.5/weather`

// const dataBefore = {
//   humidity: 12,
//   temperature: 12,
//   wind: 12,
//   weaterState: 'cloudy'
// }

class WeatherLocation extends React.Component{

  constructor({ city }){
    super()
    this.state = {
      city,
      data: null
    }    
  }

  weatherUpdateCity = () => {
    let data            = {}
    const { city }      = this.state
    const weatherAPIKey = `${URL}?q=${city}&units=metric&appid=${ KEY }`

    fetch( weatherAPIKey )
      .then( first => first.json() )
      .then( weatherData => {
        data = transformWeather( weatherData )
        //console.log( data )
        this.setState({ data })
      } )
      .catch( err => console.error( err )  )
  }

  componentDidMount(){
    this.weatherUpdateCity()
  }
  componentDidUpdate(){
  }
  
  render = () => {
    const { onWeatherLocationClick } = this.props
    const { city, data } = this.state
      return (
        <div className="cont_weather_location" onClick={onWeatherLocationClick} > 
          <Location city={ city } />
          { 
            data 
            ? <WeatherData data={ data } />
            : <div className="ske">
                <Skeleton variant={'circle'} width={150} height={150} animation={"pulse"} />
                <Skeleton variant={'text'} width={150} height={130} animation={"pulse"} />
              </div>
          }
        </div>
      )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation