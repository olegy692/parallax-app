import React, { useState, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './testing.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

import carousel11 from './images/carousel11.jpg';

import testMobile from './images/testTruck_auto_x2_colored_toned_light_ai.jpg';

import Wave from 'react-wavify'

import inGame1 from './images/inGamePic2_auto.jpg';
import inGame3 from './images/inGamePic4_auto.jpg';
import inGame5 from './images/inGamePic6_auto.jpg';
import inGame6 from './images/inGamePic7_auto.jpg';
import inGame7 from './images/inGamePic8_auto.jpg';
import inGame12 from './images/inGamePic12_auto.jpg';
import inGame13 from './images/inGamePic13_auto.jpg';
import inGame16 from './images/newPic18_auto.jpg';


import inGame1mob from './images/inGamePic2mobile_auto.jpg';
import inGame3mob from './images/inGamePic4mobile_auto.jpg';
import inGame5mob from './images/inGamePic6mobile_auto.jpg';
import inGame6mob from './images/inGamePic7mobile_auto.jpg';
import inGame7mob from './images/inGamePic8mobile_auto.jpg';
import inGame12mob from './images/inGamePic12mobile_auto (2).jpg';
import inGame13mob from './images/inGamePic13mobile_auto.jpg';
import inGame16mob from './images/newPic18_auto.jpg';





const carouselItems = [
  {
    image: carousel11,
    title: ' 1',
    mobileImage: testMobile,
    text: ' Text Area HereYour Text Area HereYour Text Area Here Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here',
  },
  
  {
    image: inGame1,
    title: ' 5',
    mobileImage: inGame1mob,
    text: 'Your Text Area HereYour Text Area Here',
  },
  {
    image: inGame3,
    title: '7',
    mobileImage: inGame3mob,
    text: 'Your Text Area HereYour Text Area Here',
  },
  {
    image: inGame5,
    title: '9',
    mobileImage: inGame5mob,
    text: 'Your Text Area HereYour Text Area Here',
  },
  {
    image: inGame6,
    title: '10',
    mobileImage: inGame6mob,
    text: 'Your Text Area HereYour Text Area Here',
  },
  {
    image: inGame7,
    title: '11',
    mobileImage: inGame7mob,
    text: 'You can get contract from different city authorities, drive different types of cars',
  },
  {
    image: inGame12,
    title: '14',
    mobileImage: inGame12mob,
    text: 'Your Text Area HereYour Text Area Here',
  },
  {
    image: inGame13,
    title: '15',
    mobileImage: inGame13mob,
    text: 'Pollution will have an impact on your game experience and progress',
  },
  {
    image: inGame16,
    title: '18',
    mobileImage: inGame16mob,
    text: 'need to remove yellow line here',
  },
  
];

/* carousel14*/
const ParaBan = () => {

  const carouselRef = React.createRef();
  const [parallaxSpeed, setParallaxSpeed] = useState(10);


  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setParallaxSpeed(5); 
      } else {
        setParallaxSpeed(-5); 
      }
    };

  
    handleResize();

  
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div style={{ position: 'absolute', width: '100%', top: '-1px', transform: 'rotate(180deg)', zIndex: '50' }}>
        <Wave
          fill='rgba(240, 244, 249, 1)'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.10,
            points: 4,
          }}
        />
      </div>

      <Carousel
        ref={carouselRef}
        slide={false}
        prevIcon={null}
        nextIcon={null}
        indicators={false}
      >
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <ParallaxBanner
              style={{ height: '100vh' }}


              layers={[{ image: window.innerWidth <= 768 ? item.mobileImage : item.image, speed: parallaxSpeed }]}
             /* layers={[{ image: item.image, speed: parallaxSpeed }]}
             */
              className="aspect"
            />
            <div className="custom-carousel-controls">
              <h1>{item.title}</h1>
              <div className="text-area">{item.text}</div>
              <div className='buttonsDiv'>
                <FontAwesomeIcon
                  icon={faCircleChevronLeft}
                  onClick={handlePrevClick}
                  className="prevNextIcons"
                />
                <FontAwesomeIcon
                  icon={faCircleChevronRight}
                  onClick={handleNextClick}
                  className="prevNextIcons"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default ParaBan;


{/** 

const ParaBan = () => {
    const carouselRef = React.createRef();

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    return (

        <div className="carousel-container">
            <div style={{ position: 'absolute', width: '100%', top: '0', transform: 'rotate(180deg)', zIndex: '50' }}>

                <Wave fill='rgba(240, 244, 249, 1)'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 30,
                        amplitude: 30,
                        speed: 0.10,
                        points: 4
                    }}
                />
            </div>

            <Carousel
                ref={carouselRef}
                slide={false}
                prevIcon={null}
                nextIcon={null}
                indicators={false}
            >
                <CarouselItem>
                    <ParallaxBanner
                        style={{ height: '100vh' }}
                        layers={[{ image: carousel11, speed: 10 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here

                        </div>

                        <div className='buttonsDiv' >

                            <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                onClick={handlePrevClick}
                                className="prevNextIcons"

                            />
                            <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                onClick={handleNextClick}
                                className="prevNextIcons"
                            />

                        </div>

                    </div>
                </CarouselItem>
                <CarouselItem>
                    <ParallaxBanner
                        style={{ height: '100vh' }}
                        layers={[{ image: carousel12, speed: 10 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here

                        </div>

                        <div className='buttonsDiv' >

                            <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                onClick={handlePrevClick}
                                className="prevNextIcons"

                            />
                            <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                onClick={handleNextClick}
                                className="prevNextIcons"
                            />

                        </div>

                    </div>
                </CarouselItem>
                <CarouselItem>
                    <ParallaxBanner
                        style={{ height: '100vh' }}
                        layers={[{ image: carousel13, speed: 10 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here

                        </div>

                        <div className='buttonsDiv' >

                            <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                onClick={handlePrevClick}
                                className="prevNextIcons"

                            />
                            <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                onClick={handleNextClick}
                                className="prevNextIcons"
                            />

                        </div>

                    </div>
                </CarouselItem>
                <CarouselItem>
                    <ParallaxBanner
                        style={{ height: '100vh' }}
                        layers={[{ image: carousel14, speed: 10 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here

                        </div>

                        <div className='buttonsDiv' >

                            <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                onClick={handlePrevClick}
                                className="prevNextIcons"

                            />
                            <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                onClick={handleNextClick}
                                className="prevNextIcons"
                            />

                        </div>

                    </div>
                </CarouselItem>

                
                

                <CarouselItem>
                    <ParallaxBanner
                        style={{ height: '100vh' }}
                        layers={[{ image: img5, speed: 10 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                        </div>

                        <div className='buttonsDiv' >

                            <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                onClick={handlePrevClick}
                                className="prevNextIcons"

                            />
                            <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                onClick={handleNextClick}
                                className="prevNextIcons"
                            />

                        </div>

                    </div>
                </CarouselItem>


                <CarouselItem>
                    <ParallaxBanner
                        style={{ height: '100vh' }}
                        layers={[{ image: img4, speed: 10 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                        </div>

                        <div className='buttonsDiv' >


                            <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                onClick={handlePrevClick}
                                className="prevNextIcons"

                            />
                            <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                onClick={handleNextClick}
                                className="prevNextIcons"
                            />

                        </div>

                    </div>
                </CarouselItem>


            </Carousel>


        </div>
    );
};

export default ParaBan;

*/}

