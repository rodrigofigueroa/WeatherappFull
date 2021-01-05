import React      from 'react'
import PropTypes  from 'prop-types'
import './styles.sass'

const Location = ({ city = 'México' }) => ( 
    <div className="cont_location">
      <h2>{city}</h2>
    </div>
  )

  Location.propTypes = {
    city: PropTypes.string
  }

export default Location