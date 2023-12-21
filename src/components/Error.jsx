import React from 'react';

import ErrorImage from '../assets/404.png';

function Error() {
  return (
    <>
    {/* <div className="error bg-gray-100" style={{height:"100vh",backgroundImage: `url(${ErrorImage})`, width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>    
    </div>  */}
    <div className='error'>
        <div className='flex bg-gray-100 items-center justify-center'>
        <img src={ErrorImage} alt="error"/>
        </div>
    </div>
    </>
  )
}

export default Error;
