import React, { useState, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './testing.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

import img1 from './images/recyclingCenter.jpg';
import img2 from './images/dada6.jpg';
import img3 from './images/222.jpg';
import img4 from './images/gameview33.jpg';
import img5 from './images/gameview2_auto_x2_colored_toned-transformed.jpeg';
import img6 from './images/silhouette.png';


import carousel1 from './images/carousel1.jpg';
import carousel2 from './images/first_auto-transformed22.jpeg';

import carousel11 from './images/carousel11.jpg';
import carousel12 from './images/carousel12.jpg';
import carousel13 from './images/carousel13.jpg';
import carousel14 from './images/carousel14.jpg';


import Wave from 'react-wavify'



const carouselItems = [
    {
      image: carousel11,
      title: 'Features 1',
      text: ' Text Area HereYour Text Area HereYour Text Area Here Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here',
    },
    {
      image: carousel12,
      title: 'Features 2',
      text: 'Your Text Area HereYour Text Area Here',
    },
    {
      image: carousel13,
      title: 'Features 3',
      text: 'Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here',
    },
    {
      image: carousel14,
      title: 'Features 4',
      text: 'You',
    },
    // Add more items as needed
  ];
  
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
        // Check window width and adjust parallax speed for mobile devices
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setParallaxSpeed(5); // Adjust this value as needed for a slower parallax effect on mobile
          } else {
            setParallaxSpeed(10); // Default speed for larger screens
          }
        };
    
        // Initial call to set the parallax speed based on the window width
        handleResize();
    
        // Listen for window resize events
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
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
                layers={[{ image: item.image, speed: parallaxSpeed }]}
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

