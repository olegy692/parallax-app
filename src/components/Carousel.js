import React, { useState, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './Carousel.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

import carousel11 from './images/CarouselImages/newCarouselImage.jpg';

import testMobile from './images/CarouselImages/testTruck_auto_x2_colored_toned_light_ai.jpg';

import Wave from 'react-wavify'

import inGame1 from './images/CarouselImages/inGamePic2_auto.jpg';
import inGame3 from './images/CarouselImages/inGamePic4_auto.jpg';
import inGame5 from './images/CarouselImages/inGamePic6_auto.jpg';
import inGame6 from './images/CarouselImages/inGamePic7_auto.jpg';
import inGame7 from './images/CarouselImages/inGamePic8_auto.jpg';
import inGame12 from './images/CarouselImages/inGamePic12_auto.jpg';
import inGame13 from './images/CarouselImages/inGamePic13_auto.jpg';
import inGame16 from './images/CarouselImages/newPic18_auto.jpg';


import inGame1mob from './images/CarouselImages/inGamePic2mobile_auto.jpg';
import inGame3mob from './images/CarouselImages/inGamePic4mobile_auto.jpg';
import inGame5mob from './images/CarouselImages/inGamePic6mobile_auto.jpg';
import inGame6mob from './images/CarouselImages/inGamePic7mobile_auto.jpg';
import inGame7mob from './images/CarouselImages/inGamePic8mobile_auto.jpg';
import inGame12mob from './images/CarouselImages/inGamePic12mobile_auto (2).jpg';
import inGame13mob from './images/CarouselImages/inGamePic13mobile_auto.jpg';
import inGame16mob from './images/CarouselImages/newPic18_auto.jpg';



const carouselItems = [

  {

    image: carousel11,

    title: ' Kontraktmissioner',

    mobileImage: testMobile,

    text: ' Fortsæt dit genbrugseventyr ved at udføre en kontrakt for hver af vores 12 forskellige butikker rundt om i byen og på den måde give materialer nyt liv ud fra de ressourcer, du opsamler. Man kan tjene penge og få XP.',

  },



  {

    image: inGame1,

    title: 'Affald er ressourcer',

    mobileImage: inGame1mob,

    text: 'Selv i enhver gyde kan der gemme sig affald, som bare venter på, at du kommer og henter det.',

  },

  {

    image: inGame3,

    title: 'En storby',

    mobileImage: inGame3mob,

    text: 'En stor og åben verden at udforske i forskellige køretøjer. Du kan udforske byen og køre i de forskellige biler rundt omkring ',

  },

  {

    image: inGame5,

    title: 'Informationsskiltene',

    mobileImage: inGame5mob,

    text: 'Hvis man er i tvivl om noget, kan man altid finde et skilt i byen, hvis der er noget, man er i tvivl om.',

  },

  {

    image: inGame6,

    title: 'Byen har brug for hjælp',

    mobileImage: inGame6mob,

    text: 'Byen har brug for din hjælp til at fjerne skraldet fra parkerne og gøre byen ren igen. Byen er plaget af fejlhåndtering af affald og ressourcer, og kan ikke vente på, at du kommer i gang med at spille.',

  },

  {

    image: inGame7,

    title: 'Kontrakt for et hospital',

    mobileImage: inGame7mob,

    text: 'Alle butikker i byen har brug for møbler og genstande; et hospital skal jo have nye senge og borde indimellem.',

  },

  {

    image: inGame12,

    title: 'Garagen',

    mobileImage: inGame12mob,

    text: 'Gør brug af Genbrugspladsens biler til at udføre dit arbejde og udforske byen. Når du lynrejser tilbage til Genbrugspladsen, er bilerne også tilbage på sin plads.',

  },

  {

    image: inGame13,

    title: 'Ressourcespild',

    mobileImage: inGame13mob,

    text: 'Skraldet har spredt sig udover hele byen og det er dit job at rydde op. At stå til og ikke gøre noget for at genbruge mere vil kun få større omkostninger. Priserne i shoppen vil stige, hvis man ikke tænker på at genbruge.',

  },

  {

    image: inGame16,

    title: 'Byen',

    mobileImage: inGame16mob,

    text: 'Byen venter på, at du kommer og rydder op og fjerne alt skraldet fra gaderne. Imens kan du udforske byen.',

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

