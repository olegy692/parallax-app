import 'bootstrap/dist/css/bootstrap.min.css';
import './sec1.css';
import React from 'react';
import './silh.css'

const divider = () => {

  return (
    <div className='divbetween' style={{
      width: '100%',
      height: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',

    }}>

      <div className='silhouette' style={{ zIndex: '1' }}></div>

    </div>

  );
}; 

export default divider;