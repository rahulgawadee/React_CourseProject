import React from 'react'
import './Spinner.css'
function Spinner() {
  return (
    <div className='flex items-center flex-col space-y-2'>
        <span className="loader"></span>
        <p className='text-lg text-bgDark font-semibold'>Loading....</p>
      
    </div>
  )
}

export default Spinner
