import React from 'react';
import './sec1.css'
import logo from './images/logo123.png';
import logo2 from './images/logo123-removebg-preview.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import testImg from "./images/testimg.png";
import windmill from "./images/windmill.png";
import mark from "./images/imageSec3.jpg";
import pict11 from "./images/pict11.jpg";
import cityBG from "./images/cityBG.png";
import machine from "./images/machine.jpg";
import Features from './features';











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



const Section1 = () => {
    return (

        <><section class="image-1">



            <div className='mainSec1'>

                <div className="content-container">
                    <div className='d-md-flex flex-md-row flex-column logo'>
                        <div className="section1-gameLogo">
                            <div className='d-flex flex-row logoImage' >
                                <img src={logo} alt="Logo" style={{ width: '750px', height: '350px' }} />
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

        </section>



            {/** 

            <section className="image-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '250px' }}>

                <div style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '5px solid transparent', padding: '20px', borderImage: 'linear-gradient(to right, #0000ff 0%, #ff6600 55% ) 1 stretch' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '98%' }}>
                        <Features></Features>
                    </div>
                </div>
            </section>


            <div className='divbetween1' style={{ width: '100%', height: '55px', backgroundColor: '#0b2444' }}>

            </div>

            */}




            {/** 
 * 
 * 
 * 
 *  <div className='divbetween1'
                style={{
                    width: '100%',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    /*backgroundColor: '#0b2444',
                    background: 'rgb(49,140,245)',
                    background: 'linear-gradient(0deg, rgba(240,244,249,1) 0%, rgba(52,216,252,1) 100%)',

                
                }}>
                <div style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '98%' }}>

                        <h2 style={{ color: '#0b2444', marginBottom: '60px' }}>Equip Yourself with Real-Life Recycling Skills in Our Game</h2>
                        <Features></Features>
                    </div>
                </div>

            </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/}



            {/** 
          


            <section class="image-2 d-md-flex flex-md-row flex-column " >

                <div className="d-md-flex flex-md-row flex-column carousel-container">
                    <Carousel className='carousel'>
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

                <div className="d-md-flex flex-column textBox">
                    <h3 className="text-heading">Static Text</h3>
                    <p className="text-description" style={{ color: '#0b2444' }}>
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



            </section>

    */}









            {/** 

            <div className='divbetween' style={{
                width: '100%',
                height: '200px',
                display: 'flex',

                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',


                background: 'rgb(49,140,245)',
                background: 'linear-gradient(0deg, rgba(240,244,249,1) 0%, rgba(52,216,252,1) 100%)',

            }}>
                <h1 style={{ color: '#0b2444', marginBottom: '50px' }}> Fun Gaming, Serious Impact</h1>
                <h3 style={{ color: '#0b2444', marginBottom: '30px' }}> Play and learn about the recycling process, from collection to reprocessing, and how it benefits the environment</h3>


            </div>






            <section class="image-4" style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>



                <div className='sec3' style={{ zIndex: '500', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', position: 'absolute', justifyContent: 'center', gap: '200px' }}>



                    

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

                    






                </div>

                
                <div className='bgImg-container'>
                    <img
                        src={cityBG}
                        style={{ height: '800px', zIndex: '501' }}
                        className="cityBG"
                    />
                </div>

                


                <div className="windmill-container">
                    <img
                        src={windmill}
                        style={{ width: '250px', zIndex: '501' }}
                        className="windmill"
                    />
                </div>



            </section>
            */}





            </>    


    );
};

export default Section1;



