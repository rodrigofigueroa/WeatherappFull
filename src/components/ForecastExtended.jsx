import React                    from 'react'
import PropTypes                from 'prop-types'
//import ForecastItem           from './ForecastItem'
import { URLFORECAST, KEY }     from './../services/openWeatherMap'
import { transformWeatherTwo }  from './../services/transformWeather'
import './styles.sass'

/*
const weeks = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

const data = {
  weaterState : 'normal',
  humidity: 12,
  wind: 12,
  temperature: 12
}
*/

class ForeCastExtended extends React.Component {

  constructor(){
    super()
    this.state = { forecast: null }
  }

  componentDidMount() {
    // fetching openweathermap
    fetch( `${URLFORECAST}?q=${this.props.city}&appid=${KEY}` )
      .then( raw => raw.json() )
      .then( forecast_data => {
        console.log( forecast_data )
        const forecast = transformWeatherTwo( forecast_data )
        console.log( forecast )
        this.setState({ forecast })
      })
      .catch( err => console.error( err ) )
  }
  forecastWeeks() { 
    return <h2>Render</h2>
    // return weeks.map( day => <ForecastItem 
    //     key={day} 
    //     weekDay={ day } 
    //     hour={ 12 } 
    //     data={ data } /> 
      // ) 
  }
  
  loaderBeforeForecast = () => {
    return <h2>Cargando...</h2>
  }

  render(){
    const { city }      = this.props
    const { forecast }  = this.state
    return ( 
    <div className="fore_cast">
      <h2> ForeCastExtended { city }  </h2>
      { 
        forecast 
          ? this.forecastWeeks()
          : this.loaderBeforeForecast()
      }
    </div> )
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForeCastExtended