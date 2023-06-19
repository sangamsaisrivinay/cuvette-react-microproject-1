import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import EmailForm from '../EmailForm'

const mystyle={
  title:{
    fontSize:'1.8rem',
    fontWeight:'bold'
  },
  text:{
    fontSize:'1rem',
  }
}

const Left = () => {
  return (
    <div className='container small column-flex' >
      <div style={mystyle.title}>An inspiring design delivered to your inbox every morning</div>
      <div style={mystyle.text}>
        Our team scouts the internet for the best designs,
        <br /> illustrations and art and delivers a truly inspiring
        <br /> one every day to your inbox</div>
      <div style={{height:"30%"}}>
        <EmailForm></EmailForm>
      </div>
    </div>
  )
}

export default Left