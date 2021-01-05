import LocationList       from './components/LocationList'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper              from '@material-ui/core/Paper/'
import AppBar             from '@material-ui/core/AppBar/'
import ToolBar            from '@material-ui/core/ToolBar/'
import Typography         from '@material-ui/core/Typography/'
import MenuIcon           from '@material-ui/icons/Menu/'
import IconButton         from '@material-ui/core/IconButton/'
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
            <AppBar position="static">
              <ToolBar>
                <IconButton edge={ 'start' } >
                  <MenuIcon style={({color: '#fff'})}></MenuIcon>
                </IconButton>
                <Typography variant="h6">
                  ForeCast
                </Typography>
              </ToolBar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } md={ 6 } >
            <LocationList cities={cities} onLListClick={ clickApp } />
          </Col>
          <Col xs={12} md={6} >
            <Paper elevation={3}>
              <div style={({ background: '#999', height: '100vh'})}>
                <h2>Hello</h2>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App
