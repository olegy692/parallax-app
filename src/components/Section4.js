import React from 'react';
import windmill from "./images/windmill.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec1.css'

const Section4 = () => {
  return (

    <section class="image-4" style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

      <div className='sec3' style={{ zIndex: '500', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', position: 'absolute', justifyContent: 'center', gap: '200px' }}>

        {/** 

        <div >
            <img
                src={mark}
                style={{ width: '800px'}}

            />
        </div>

                 <div className="d-md-flex flex-column textBox">
            <h3 className="text-heading">Static Text</h3>
            <p className="text-description" style={{zIndex:'1'}}>
                This text remains fixed while images slide.
                It can have multiple lines and will be centered both vertically and horizontally.
                This text remains fixed while images slide.
                It can have multiple lines and will be centered both vertically and horizontally.
                This text remains fixed while images slide.
                It can have multiple lines and will be centered both vertically and horizontally.
                This text remains fixed while images slide.
                It can have multiple lines and will be centered both vertically and horizontally.
                This text remains fixed while images slide.
                It can have multiple lines and will be centered both vertically and horizontally.
                This text remains fixed while images slide.
                It can have multiple lines and will be centered both vertically and horizontally.
            </p>
        </div>

        */}

      </div>

      {/** 
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