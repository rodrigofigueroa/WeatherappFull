import LocationList       from './components/LocationList'
import { Grid, Row, Col } from 'react-flexbox-grid'
const cities = [
  'Buenos Aires, ar',
  'Canada, ca',
  'Finland, fi',
  'London, uk',
  'France, fr'
]

const clickApp = city => {
  console.log(`clickApp ${city}`)
}

function App() {
  return (
    <div className="App">
      <Grid >
        <Row>
          <Col xs={12} >
            <h1>ForeCast Extended</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } md={ 6 } >
            <LocationList cities={cities} onLListClick={ clickApp } />
          </Col>
          <Col xs={12} md={6} >
            <div style={({ background: '#999', height: '100vh'})}>
              <h2>Hello</h2>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App
