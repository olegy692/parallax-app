import React from 'react';
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





import Wave from 'react-wavify'

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
                        layers={[{ image: carousel1, speed: 25 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here

                        </div>

                        <div style={{ height: '55px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', width: '100%', paddingTop: '8px' }}>


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
                        layers={[{ image: img5, speed: 25 }]}
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

                        <div style={{ height: '55px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', width: '100%', paddingTop: '8px' }}>


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
                        layers={[{ image: img4, speed: 25 }]}
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

                        <div style={{ height: '55px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', width: '100%', paddingTop: '8px' }}>


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


           


{/**
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>

                <Wave fill='rgba(81, 185, 36, 1)'
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

             */}

        </div>
    );
};

export default ParaBan;

