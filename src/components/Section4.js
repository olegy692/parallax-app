import React from 'react';
import windmill from "./images/windmill.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec1.css'
import Wave from 'react-wavify'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';




const Section4 = () => { 
  
  return ( 


    <section class="image-4" style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

      <div style={{ position: 'absolute', width: '100%', top: '0', transform: 'rotate(180deg)', zIndex: '50' }}>

        <Wave fill='rgba(240, 244, 249, 1)'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 70,
            amplitude: 40,
            speed: 0.20,
            points: 4
          }}
        />
      </div>

      <div className='sec3' style={{ zIndex: '500', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', position: 'absolute', justifyContent: 'center', gap: '200px' }}>

     









        {/** 

        <div >
            <img
                src={mark}
                style={{ width: '800px'}}

            />
        </div>

        */}


<div className="custom-text-sec4" >

<h1>Development</h1>

<div className="text-area-sec4">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
    Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
    Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here

</div>



</div>



        
        

        
        

      </div>

      {/*
    <div className='bgImg-container'>
        <img
            src={cityBG}
            style={{ height: '800px', zIndex: '501' }}
            className="cityBG"
        />
    </div>

        */} 


      <div className="windmill-container">
        <img
          src={windmill}
          style={{ width: '250px', zIndex: '501' }}
          className="windmill"
        />
      </div>

      



    </section>

  );
};

export default Section4;


