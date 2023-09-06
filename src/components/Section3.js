import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec1.css'

const Section3 = () => {
  return (

    <div className='divbetween' style={{
      width: '100%',
      height: '200px',
      display: 'flex',

      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',


      background: 'rgb(49,140,245)',
      background: 'linear-gradient(0deg, rgba(240,244,249,1) 0%, rgba(52,216,252,1) 100%)',

    }}>
      <h1 style={{ color: '#0b2444', marginBottom: '50px' }}> Fun Gaming, Serious Impact</h1>
      <h3 style={{ color: '#0b2444', marginBottom: '30px' }}> Play and learn about the recycling process, from collection to reprocessing, and how it benefits the environment</h3>


    </div>

  );
};

export default Section3;