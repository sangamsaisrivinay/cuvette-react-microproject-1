
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Right = () => {
  return (
    <div className="container small column-flex" style={{"justifyContent":"space-between"}}>
      <div className='captz small-text'>
        <div>dweep.io</div>
        <div>made with love in india</div>
        <div className='container row-flex' style={{"justifyContent":"flex-end"}}>
          <FontAwesomeIcon icon={faLinkedin} className='social-icons' />
          <FontAwesomeIcon icon={faInstagram} className='social-icons'/>
        </div>
      </div>
      <div className='small-text'>
          hello@dweep.io
      </div>
    </div>
  )
}

export default Right