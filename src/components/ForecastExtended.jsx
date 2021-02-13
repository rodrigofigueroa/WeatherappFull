import React                    from 'react'
import PropTypes                from 'prop-types'
import ForecastItem             from './ForecastItem'
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
    this.updateCity( this.props.city )  
  }

  componentDidUpdate( prevProps, prevState, snapshot ){
    //console.log( prevProps, prevState, snapshot ) 
    if( this.props.city !== prevProps.city ){
      this.updateCity( this.props.city )
    }
  }

  updateCity = city => {
    fetch( `${ URLFORECAST }?q=${ city }&appid=${ KEY }` )
      .then( raw => raw.json() )
      .then( forecast_data => {
        const forecast = transformWeatherTwo( forecast_data )
          this.setState({ forecast })
      })
      .catch( err => console.error( err ) )
  }
  
  forecastWeeks( foreCast ) { 
    if( !foreCast ) return ''
    return foreCast.map( ({ weekDay: { day, hour, data } }) => <ForecastItem 
        key={ `${day}${hour}` } 
        weekDay={ day } 
        hour={ +hour } 
        data={ data } />
      ) 
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
        city
          ? this.forecastWeeks( forecast )
          : this.loaderBeforeForecast()
      }
    </div> )
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForeCastExtended