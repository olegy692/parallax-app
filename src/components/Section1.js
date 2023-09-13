import React, { useEffect, useState, useRef } from 'react';
import './sec1.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './images/logo123.png';
import testImg from "./images/testimg.png";
import pict11 from "./images/pict11.jpg";
import gbTruck from './images/zaza-512.png'

import Wave from 'react-wavify'

/*
const images = [
    {
        title: "testImg",
        imgSrc: testImg,
        alt: "test image",
        description: "this is a test image",
    },
    {
        title: "pict11",
        imgSrc: pict11,
        alt: "test image",
        description: "this is a test image",
    },

];

*/



const Section1 = () => {




    const [scrollY, setScrollY] = useState(0);
  const elementWidth = 90; 
  let maxLeftPosition;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the maximum left position based on viewport width and element width
  maxLeftPosition = window.innerWidth - (elementWidth + 100);

  // Ensure it's not negative
  maxLeftPosition = Math.max(maxLeftPosition, 0);

  // Calculate the left position based on scroll position
  let leftPosition = scrollY * 1.8;

  // Limit the left position to the maximum value
  if (leftPosition > maxLeftPosition) {
    leftPosition = maxLeftPosition;
  }


  const divStyle = {
    height: '100px',
    width: '170px',
    backgroundImage: `url(${gbTruck})`,
    backgroundSize: 'cover',
    position: 'absolute',
    top: '864px',
    left: `${leftPosition}px`,
    transition: 'left 0.25s ease',
  };

  if (window.innerWidth <= 768) {
      divStyle.width = '85px';
      divStyle.height = '50px' 
      divStyle.top = '800px'; 
      leftPosition = scrollY * 0.1;
     
    }


    {/** 

    const [scrollY, setScrollY] = useState(0);
    const maxLeftPosition = 1700;
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      handleScroll();
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
    let leftPosition = scrollY * 1.8;
  
    
    if (leftPosition > maxLeftPosition) {
      leftPosition = maxLeftPosition;
    }
    */}
  
   
      
     


    return (

        <><section class="image-1">

            {/**

<div style={{position:'absolute', width:'100%', bottom:'0'}}>

<Wave fill='rgba(52, 216, 252, 1)'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 60,
          amplitude: 40,
          speed: 0.20,
          points: 5
        }}
  />
</div>

 */}



            <div className='mainSec1'>

                <div className="content-container">
                    <div className='d-md-flex flex-md-row flex-column logo'>
                        <div className="section1-gameLogo">
                            <div className='d-flex flex-row logoImage' >
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>
                    </div>

                    <div className="d-md-flex flex-md-row flex-column section1-buttonContainer ">

                        <div className="d-flex section1-button1">
                            <a href='https://play.google.com/store/apps/details?id=com.ArgoGamesRoskilde.Genbrugsspillet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                <img
                                    alt='Get it on Google Play'
                                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                                    style={{ width: '300px', height: '130px' }}
                                />
                            </a>
                        </div>

                        <div className="d-flex section1-button2">
                            <a href="https://apple.co/3QIJ0PL">
                                <img
                                    src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/da-dk.svg"
                                    alt="Download on the App Store"
                                    style={{ width: '265px', height: '140px' }}
                                />
                            </a>
                        </div>                   

                    </div>
                </div>
            </div>

            <div style={divStyle}></div>

        </section>

            </>    


    );
};

export default Section1;



