import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './testing.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

import img1 from './images/recyclingCenter.jpg';
import img2 from './images/dada6.jpg';
import img3 from './images/dada5.jpg';


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
                        height: 70,
                        amplitude: 40,
                        speed: 0.20,
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
                        layers={[{ image: img1, speed: 25 }]}
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
                        layers={[{ image: img2, speed: 25 }]}
                        className="aspect"
                    />
                    <div className="custom-carousel-controls" >

                        <h1>Features</h1>

                        <div className="text-area">Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
                            Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Ar Your Text Area HereYour Text Area HereYour Text Area HereYour Text Area HereYour Text Area Here
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
                        layers={[{ image: img3, speed: 25 }]}
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

            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>

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

        </div>
    );
};

export default ParaBan;

