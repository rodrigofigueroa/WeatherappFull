// import convert from 'convert-units'
import { 
  SNOW,
  CLOUDY,
  THUNDER,
  RAIN,
  DRIZZLE
  } from '../constants/weathers'

const getStateWeather = ({ weather }) => {
  const { 0: { id } } = weather
  switch( id ){
    case (id < 300):
      return THUNDER
    case (id < 400):
      return DRIZZLE
    case (id < 600):
      return RAIN
    case (id < 700):
      return SNOW
    default:
      return CLOUDY
  }
}

// const getTemp = temp => {
//   return +convert( temp )
//     .from('F')
//       .to('C')
//         .toString()
//           .slice(0,3)
// }

const transformWeather = weatherData => {
  const { 
    main: {
      humidity, temp: temperature },
      wind: { speed: wind }
   } = weatherData
   const weatherState = getStateWeather( weatherData )
  //  const temperature = getTemp( temp )
   const data = {
      humidity,
      temperature,
      wind,
      weatherState
   }
   return data
}
export const transformWeatherTwo =  ({ list }) => {
    return list.filter( date => {
      const { dt_txt }  = date,
            reg         = /(09:00)|(12:00)|(18:00)/g
      return dt_txt.match( reg ) ? date : ''
    } )
}
export default transformWeather