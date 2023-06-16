import React from 'react'

const links=['prompt generator', 'dewwp dialy', 'all contributors', 'your data on dweep.io', 'contribute to dweep']

const Left = () => {
  return (
    <div className='container small column-flex'>
      {
        links.map((link,index)=>{
          return(
            <div className="captz small-text">
                {link}
            </div>
          )
        })
      }
    </div>
  )
}

export default Left