import React from 'react'
import Man from '../../images/man.png'

const Right = () => {
  return (
    <div className='container row-flex' style={{justifyContent:"flex-end",paddingRight:'0'}}>
      <img src={Man} alt="man" />
    </div>
  )
}

export default Right