import React              from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'
import './FlexboxGrid.sass'

class FlexboxGrid extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  render(){
    console.log( this.state )
    return (
      <Grid fluid >
        <Row className="flex_cols">
          <Col className="green"  xm={ 12 } sm={ 6 } md={ 12 } lg={ 6 } >
          </Col>
          <Col className="red"    xm={ 12 } sm={ 6 } md={ 12 } lg={ 6 } >
          </Col>
        </Row>
        <Row between='xs' >
          <Col xs={1} className="blue"></Col>
          <Col xs={1} className="green"></Col>
          <Col xs={1} className="blue"></Col>
          <Col xs={1} className="red"></Col>
        </Row>
      </Grid>
    )
  }
}

export default FlexboxGrid