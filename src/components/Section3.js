import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec1.css'

import { Carousel, Button } from 'react-bootstrap';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselCss.css';
import './MaleHuman.css';
import testImg from "./images/image1.png";
import testImg2 from "./images/image2.png";
import testImg3 from "./images/image3.png";
import testImg4 from "./images/image4.png";
import testImg5 from "./images/image5.png";
import maleHum from "./images/Male-15.png";
import femaleHum from "./images/Female-1.png";
// import MaleFemale from './MaleFemale.'; // Replace with the correct path
import workingBench from "./images/crafting-1.png";
import taxi from "./images/taxi-3.png";
import woodContainer from "./images/WoodContainer-1.png";





const images = [
  {
    //title: "testImg",
    imgSrc: testImg,
    //alt: "test image",
    //description: "this is a test image",
  },
  {
    //title: "testImg",
    imgSrc: testImg2,
    //alt: "test image",
    //description: "this is a test image",
  },
  {
    //title: "testImg",
    imgSrc: testImg3,
    //alt: "test image",
    //description: "this is a test image"
  },
  {
    //title: "testImg",
    imgSrc: testImg4,
  },
  {
    imgSrc: testImg5
  }
];

//const imgElement = document.getElementById("imageElement");
//imgElement.src = (maleHum );


const Section3 = () => {





  // function App() {

  // }
  // return (
  //   <div>
  //     <MaleFemale />
  //   </div>
  // );

  return (





    <div className='divbetween' style={{


      width: '100%',
      height: '2400px',
      display: 'flex',

      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',


      background: 'rgb(49,140,245)',
      background: 'linear-gradient(0deg, rgba(117,210,240,1) 0%, rgba(103,107,113,1) 100%)',

    }}>






      {/* <Parallax
                        style={{ height: '100vh' }}
                        layers={[{ image: maleHum, speed: 15 }]}
                        className="maleHuman"
>


<div className="maleHuman">
              
            </div>
</Parallax>
<Parallax
style={{ height: '100vh' }}
layers={[{ image: femaleHum, speed: 15 }]}
className="femaleHuman"
>
            <div className="femaleHuman">
            
                        
              
            </div>
            </Parallax> */}
      <div>
        <ParallaxProvider>
          <Parallax speed={-5}>
            <div className='maleHuman'>
              <img
                src={maleHum}
                width="140"
                height="300"
              />
            </div>

          </Parallax>
          <Parallax speed={-5}>
            <div className='femaleHuman'>
              <img
                src={femaleHum}
                width="140"
                height="300"
              />
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>

      <h1 style={{ color: '#0b2444', marginBottom: '50px' }}> Fun Gaming, Serious Impact</h1>
      <h3 style={{ color: '#0b2444', marginBottom: '30px' }}> Spil og lær om genbrug ved at opsamle, genanvende og se, hvordan det påvirker miljøet.</h3>


      <div className="container-fluid pink-bg" style={{ marginLeft: '450px' }}>
        <div className="row">

          <div className="col-md-7 col-10 p-0 red-bg">

            <div className="carousel-container mx-auto overflow-hidden">

              <Carousel>
                {images.map((image, index) => (
                  <Carousel.Item key={index} interval={2000}>
                    <img
                      className="d-block w-100 carousel-item"
                      src={image.imgSrc}
                      alt={image.alt}
                      style={{ borderRadius: '10px' }}
                    />
                    <Carousel.Caption>
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>

            </div>
          </div>

          {/* <div className="col-md-4 col-10 p-0 text-area blue-bg">
            <h3 className="text-heading">Static Text</h3>
            <p className="text-description">
              This text remains fixed while images slide.
              It can have multiple lines and will be centered both vertically and horizontally.
            </p>
          </div> */}



          <div style={{ display: 'flex', height: '5000px', flexDirection: 'column', left: '300' }}>

            <div style={{ display: 'flex', height: '600px', flexDirection: 'row' }}>

              <div style={{ backgroundColor: 'yellow', height: '0px', width: '600px' }}>
                <img
                  src={workingBench}
                  width="600"
                  height="600"
                />

              </div>

              <div style={{ height: '400px', width: '500px', }}>

                <fieldset>
                  {/* <legend></legend> */}

                  <aside id="info-block" style={{ top: '100px' }}>

                    <section class="file-marker" style={{ height: '250px', top: '100px' }}>

                      <div>

                        <div class="box-contents">
                          <div id="audit-trail">
                            <div class="box-title">

                              <h3 className="text-heading-categories">Genanvendelse</h3>
                              <p className="text-woodbench-description">
                                Lær at genanvende træ til alle mulige formål.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </aside>
                </fieldset>


              </div>


            </div>

            <div style={{ display: 'flex', height: '400px', flexDirection: 'row' }}>
              <div style={{ height: '400px', width: '600px' }}>

                <fieldset>
                  {/* <legend></legend> */}

                  <aside id="info-block">

                    <section class="file-marker" style={{ height: '250px', top: '100px' }}>

                      <div>

                        <div class="box-contents">
                          <div id="audit-trail">
                            <div class="box-title">

                              <h3 className="text-heading-categories">Sortering</h3>
                              <p className="text-woodbench-description">
                                Lær at sortere materialer til alle mulige formål og giv dem nyt liv.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </aside>
                </fieldset>




              </div>

              <div style={{ height: '000px', width: '500px', }}>

                <img
                  src={woodContainer}
                  width="500"
                  height="300"
                />
              </div>

            </div>

            <div style={{ display: 'flex', height: '00px', flexDirection: 'row' }}>
              <div style={{ display: 'flex', height: '300px', flexDirection: 'row' }}>
                <div style={{ backgroundColor: 'orange', height: '000px', width: '600px', }}>
                  <img
                    src={taxi}
                    width="600"
                    height="350"
                  />
                </div>
                <div style={{ height: '100px', width: '500px' }}>


                  <fieldset>
                    {/* <legend></legend> */}

                    <aside id="info-block">

                      <section class="file-marker" style={{ height: '250px', top: '100px' }}>

                        <div>

                          <div class="box-contents">
                            <div id="audit-trail">
                              <div class="box-title">
                                <h3 className="text-heading-categories">Nyd livet / Enjoy life</h3>
                                <p className="text-woodbench-description">
                                  Kør rundt i forskellige køretøjer igennem en levende by.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </aside>
                  </fieldset>



                </div>


              </div>
            </div>
          </div>


        </div>
      </div>



    </div>

  );
};

export default Section3;











