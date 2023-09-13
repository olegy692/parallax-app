
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec1.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import img5 from './images/recycleBorder.png';
import React, { useEffect, useState, useRef } from 'react';

import './silh.css'





const divider = () => {
  

  return (





    <div className='divbetween' style={{
      width: '100%',
      height: '3%',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      //background: 'rgb(165, 97, 41)',
      //background: 'linear-gradient(0deg, rgba(233,241,238,1) 0%, rgba(203, 192, 185, 1) 100%)',

    }}>

<div className='silhouette' style={{zIndex:'1'}}></div>


 
    </div>


  );
};

export default divider;