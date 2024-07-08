import React from 'react'
import { Link } from 'react-router-dom';


const FooterComponent = () => {
  return (
    <div className='footer text-center footer'>
     <span>Project Movie</span>
      <span className='d-none d-md-inline ms-2'>@ All right reserved</span> 
      <span>-mehdi khallaghi</span>
      <Link to={"rcounter"} className='btn-counter'>to counter page</Link>
    </div>
  )
}

export default FooterComponent;
