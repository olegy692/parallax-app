import React, { useEffect, useState, useRef } from 'react';
import './sec1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/LogoImages/logo123.png';
import gbTruck from './images/truck_remastered.png';


const Section1 = () => {


    const [scrollY, setScrollY] = useState(0);
    const elementWidth = 90;

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



    let leftPosition;
    let maxLeftPosition;


    if (window.innerWidth === 280) {
        maxLeftPosition = window.innerWidth - (elementWidth);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 0.2;
    }
    else if (window.innerWidth <= 628) {
        maxLeftPosition = window.innerWidth - (elementWidth);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 1.0;
    }
    else if (window.innerWidth <= 768) {
        maxLeftPosition = window.innerWidth - (elementWidth);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 0.5;
    }
    else if (window.innerWidth === 820) {
        maxLeftPosition = window.innerWidth - (elementWidth + 100);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 0.5;
    }
    else {
        maxLeftPosition = window.innerWidth - (elementWidth + 100);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 1.8;
    }

    maxLeftPosition = Math.max(maxLeftPosition, 0);


    if (leftPosition > maxLeftPosition) {
        leftPosition = maxLeftPosition;
    }


    const divStyle = {
        height: '100%',
        maxWidth: '40%', //12% før

        //backgroundImage: `url(${gbTruck})`,
        backgroundSize: 'cover',
        position: 'relative',
        left: `${leftPosition}px`,
        transition: 'left 0.25s ease',
    };
    const imgStyle = {
        //width: '100%', // Image width will be 100% of the parent container
        height: '100%', // Image height will be 100% of the parent container
        objectFit: 'cover', // Maintain aspect ratio and cover the container
    };
    if (window.innerWidth === 280 && window.innerHeight === 653) {
        divStyle.width = '20%'
        divStyle.maxWidth = '20%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 320 && window.innerHeight === 480) {
        divStyle.width = '27%'
        divStyle.maxWidth = '27%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 320 && window.innerHeight === 533) {
        divStyle.width = '27%'
        divStyle.maxWidth = '27%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 320 && window.innerHeight === 568) {
        divStyle.width = '32%'
        divStyle.maxWidth = '32%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 480) {
        divStyle.width = '25%'
        divStyle.maxWidth = '25%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 598) {
        divStyle.width = '30%'
        divStyle.maxWidth = '30%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 640) {
        divStyle.width = '32%'
        divStyle.maxWidth = '32%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 718) {
        divStyle.width = '35%'
        divStyle.maxWidth = '35%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 740) {
        divStyle.width = '37%'
        divStyle.maxWidth = '37%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 780) {
        divStyle.width = '39%'
        divStyle.maxWidth = '39%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 375 && window.innerHeight === 667) {
        divStyle.width = '39%'
        divStyle.maxWidth = '39%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 375 && window.innerHeight === 667) {
        divStyle.width = '39%'
        divStyle.maxWidth = '39%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 384 && window.innerHeight === 640) {
        divStyle.width = '30%'
        divStyle.maxWidth = '30%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 390 && window.innerHeight === 695) {
        divStyle.width = '32%'
        divStyle.maxWidth = '32%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 390 && window.innerHeight === 844) {
        divStyle.width = '40%'
        divStyle.maxWidth = '40%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 393 && window.innerHeight === 786) {
        divStyle.width = '40%'
        divStyle.maxWidth = '40%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 400 && window.innerHeight === 640) {
        divStyle.width = '33%'
        divStyle.maxWidth = '33%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 412 && window.innerHeight === 690) {
        divStyle.width = '33%'
        divStyle.maxWidth = '33%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 412 && window.innerHeight === 892) {
        divStyle.width = '40%'
        divStyle.maxWidth = '40%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 414 && window.innerHeight === 736) {
        divStyle.width = '38%'
        divStyle.maxWidth = '38%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 414 && window.innerHeight === 736) {
        divStyle.width = '38%'
        divStyle.maxWidth = '38%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 430 && window.innerHeight === 932) {
        divStyle.width = '38%'
        divStyle.maxWidth = '38%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 432 && window.innerHeight === 768) {
        divStyle.width = '38%'
        divStyle.maxWidth = '38%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 480 && window.innerHeight === 800) {
        divStyle.width = '33%'
        divStyle.maxWidth = '33%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 504 && window.innerHeight === 504) {
        divStyle.width = '19%'
        divStyle.maxWidth = '19%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 600 && window.innerHeight === 960) {
        divStyle.width = '29%'
        divStyle.maxWidth = '29%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 600 && window.innerHeight === 1024) {
        divStyle.width = '31%'
        divStyle.maxWidth = '31%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 604 && window.innerHeight === 966) {
        divStyle.width = '31%'
        divStyle.maxWidth = '31%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 720 && window.innerHeight === 1280) {
        divStyle.width = '31%'
        divStyle.maxWidth = '31%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 768 && window.innerHeight === 1024) {
        divStyle.width = '27%'
        divStyle.maxWidth = '27%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 768 && window.innerHeight === 1366) {
        divStyle.width = '32%'
        divStyle.maxWidth = '32%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 800 && window.innerHeight === 1280) {
        divStyle.width = '42%'
        divStyle.maxWidth = '42%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 820 && window.innerHeight === 1180) {
        divStyle.width = '42%'
        divStyle.maxWidth = '42%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 1024 && window.innerHeight === 1366) {
        divStyle.width = '42%'
        divStyle.maxWidth = '42%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth === 1024 && window.innerHeight === 1440) {
        divStyle.width = '42%'
        divStyle.maxWidth = '42%'
        divStyle.height = '100%';
    }
    else if (window.innerWidth <= 445) {
        if (window.innerHeight <= 667) {
            divStyle.width = '30%'
            divStyle.maxWidth = '30%'
            divStyle.height = '100%';
        }
        else {
            divStyle.Width = '35%'
            divStyle.maxWidth = '35%' //30% før
            divStyle.height = '100%';
        }
    }
    else if (window.innerWidth <= 496) {
        if (window.innerHeight <= 425) {
            divStyle.width = '16%'
            divStyle.maxWidth = '16%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 950) {
            divStyle.width = '30%'
            divStyle.maxWidth = '30%'
            divStyle.height = '100%';
        }
        else {
            divStyle.width = '20%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }
    }
    else if (window.innerWidth <= 580) {
        if (window.innerHeight <= 460) {
            divStyle.width = '17%'
            divStyle.maxWidth = '17%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 600) {
            divStyle.Width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 720) {
            divStyle.Width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }
        else {
            divStyle.Width = '10%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }

    }
    else if (window.innerWidth <= 720) {
        if (window.innerHeight <= 585) {
            divStyle.width = '15%'
            divStyle.maxWidth = '15%'
            divStyle.height = '100%';
        }
        if (window.innerHeight <= 820) {
            divStyle.width = '20%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }
        if (window.innerHeight <= 1000) {
            divStyle.width = '25%'
            divStyle.maxWidth = '25%'
            divStyle.height = '100%';
        }
        else {
            divStyle.width = '15%'
            divStyle.maxWidth = '15%'
            divStyle.height = '100%';
        }
    }
    else if (window.innerWidth <= 768) {
        if (window.innerHeight <= 415) {
            divStyle.width = '13%'
            divStyle.maxWidth = '13%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 472) {
            divStyle.width = '13%'
            divStyle.maxWidth = '13%'
            divStyle.height = '100%'
        }
        else if (window.innerHeight <= 540) {
            divStyle.width = '15%'
            divStyle.maxWidth = '15%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 640) {
            divStyle.width = '15%'
            divStyle.maxWidth = '15%'
            divStyle.height = '100%';
        }
        else {
            divStyle.width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }
    }
    else if (window.innerWidth <= 900) {
        if (window.innerHeight <= 675) {
            divStyle.width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }
        if (window.innerHeight <= 770) {
            divStyle.width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }
        if (window.innerHeight <= 1200) {
            divStyle.width = '36%'
            divStyle.maxWidth = '36%'
            divStyle.height = '100%';
        }
        else {
            divStyle.width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }
    }
    else if (window.innerWidth <= 1050) {
        if (window.innerHeight <= 770) {
            divStyle.width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1400) {
            divStyle.width = '40%'
            divStyle.maxWidth = '40%'
            divStyle.height = '100%';
        }
        else {
            divStyle.width = '23%'
            divStyle.maxWidth = '23%'
            divStyle.height = '100%';
        }

    }
    else if (window.innerWidth <= 1280) {
        if (window.innerHeight <= 600) {
            divStyle.width = '17%'
            divStyle.maxWidth = '17%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 800) {
            divStyle.width = '18%'
            divStyle.maxWidth = '18%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 900) {
            divStyle.width = '20%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1180) {
            divStyle.width = '36%'
            divStyle.maxWidth = '36%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1368) {
            divStyle.width = '40%'
            divStyle.maxWidth = '40%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1920) {
            divStyle.width = '35%' //17% før
            divStyle.maxWidth = '17%'
            divStyle.height = '100%';
        }

    }
    else { //over 1280
        if (window.innerHeight <= 620) {
            divStyle.width = '6%'
            divStyle.maxWidth = '6%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 800) {
            divStyle.width = '20%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1000) {
            divStyle.width = '20%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1200) {
            divStyle.width = '17%'
            divStyle.maxWidth = '17%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1400) {
            divStyle.width = '20%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1500) {
            divStyle.width = '20%'
            divStyle.maxWidth = '20%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1700) {
            divStyle.width = '15%'
            divStyle.maxWidth = '15%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 1900) {
            divStyle.width = '15%'
            divStyle.maxWidth = '15%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 2100) {
            divStyle.width = '15%'
            divStyle.maxWidth = '15%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 2300) {
            divStyle.width = '20%'
            divStyle.maxWidth = '25%'
            divStyle.height = '100%';
        }
        else if (window.innerHeight <= 3100) {
            divStyle.width = '40%'
            divStyle.maxWidth = '40%'
            divStyle.height = '100%';
        }
    }




    return (

        <><section class="image-1">

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
                                    src='https://play.google.com/intl/en_us/badges/static/images/badges/da_badge_web_generic.png'

                                />
                            </a>
                        </div>

                        <div className="d-flex section1-button2">
                            <a href="https://apple.co/3QIJ0PL">
                                <img
                                    src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/da-dk.svg"
                                    alt="Download on the App Store"

                                />
                            </a>
                        </div>

                    </div>
                </div>

                <div className="gbTruckDiv" >

                    <div style={divStyle}>
                        <img src={gbTruck} alt="Truck" style={imgStyle} />
                    </div>

                </div>

            </div>




            {/**  <div style={divStyle}></div> */}

        </section>

        </>


    );
};

export default Section1;




















{{/**
import React, { useEffect, useState, useRef } from 'react';
import './sec1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo123.png';
import gbTruck from './images/zaza-512.png'
import GoogleLogo from './images/google-play-badge.png'
import AppStoreLogo from './images/Download_on_the_App_Store_Badge_DK_RGB_blk_100217.svg'



const Section1 = () => {


    const [scrollY, setScrollY] = useState(0);
    const elementWidth = 90;

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

    let leftPosition;
    let maxLeftPosition;


    if (window.innerWidth === 280) {
        maxLeftPosition = window.innerWidth - (elementWidth);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 0.2;
    }
    else if (window.innerWidth <= 768) {
        maxLeftPosition = window.innerWidth - (elementWidth);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 0.5;
    }
    else if (window.innerWidth === 820) {
        maxLeftPosition = window.innerWidth - (elementWidth + 100);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 0.5;
    }
    else {
        maxLeftPosition = window.innerWidth - (elementWidth + 100);
        maxLeftPosition = Math.max(maxLeftPosition, 0);
        leftPosition = scrollY * 1.8;
    }

    maxLeftPosition = Math.max(maxLeftPosition, 0);


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

    if (window.innerWidth === 280 && window.innerHeight === 653) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '430px !important';
    }
    else if (window.innerWidth === 320 && window.innerHeight === 480) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '431px';
    }
    else if (window.innerWidth === 320 && window.innerHeight === 533) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '483px';
    }
    else if (window.innerWidth === 320 && window.innerHeight === 568) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '519px';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 480) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '430px';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 598) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '549px';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 640) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '590px';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 718) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '669px';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 740) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '691px';
    }
    else if (window.innerWidth === 360 && window.innerHeight === 780) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '730px';
    }
    else if (window.innerWidth === 375 && window.innerHeight === 667) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '616px';
    }
    else if (window.innerWidth === 375 && window.innerHeight === 812) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '762px';
    }
    else if (window.innerWidth === 375) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '617px';
    }
    else if (window.innerWidth === 384 && window.innerHeight === 640) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '590px';
    }
    else if (window.innerWidth === 390 && window.innerHeight === 695) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '645px';
    }
    else if (window.innerWidth === 390 && window.innerHeight === 844) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '794px';
    }
    else if (window.innerWidth === 393 && window.innerHeight === 786) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '737px';
    }
    else if (window.innerWidth === 393) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '801px';
    }
    else if (window.innerWidth === 400 && window.innerHeight === 640) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '590px';
    }
    else if (window.innerWidth === 412 && window.innerHeight === 690) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '641px';
    }
    else if (window.innerWidth === 412 && window.innerHeight === 892) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '844px';
    }
    else if (window.innerWidth === 412) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '865px';
    }
    else if (window.innerWidth === 414 && window.innerHeight === 736) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '687px';
    }
    else if (window.innerWidth === 414) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '846px';
    }
    else if (window.innerWidth === 430 && window.innerHeight === 932) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '883px';
    }
    else if (window.innerWidth === 432 && window.innerHeight === 768) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '719px';
    }
    else if (window.innerWidth === 480 && window.innerHeight === 800) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '751px';
    }
    else if (window.innerWidth === 504 && window.innerHeight === 504) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '454px';
    }
    else if (window.innerWidth === 540) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '670px';
    }
    else if (window.innerWidth === 550) {
        divStyle.width = '85px';
        divStyle.height = '50px';
        divStyle.top = '539px';
    }
    else if (window.innerWidth === 600 && window.innerHeight === 960) {
        divStyle.top = '861px';
    }
    else if (window.innerWidth === 600 && window.innerHeight === 1024) {
        divStyle.top = '925px';
    }
    else if (window.innerWidth === 604 && window.innerHeight === 966) {
        divStyle.top = '867px';
    }
    else if (window.innerWidth === 720 && window.innerHeight === 1280) {
        divStyle.top = '1180px';
    }
    else if (window.innerWidth === 768 && window.innerHeight === 1024) {
        divStyle.top = '925px';
    }
    else if (window.innerWidth === 768 && window.innerHeight === 1366) {
        divStyle.top = '1266px';
    }
    else if (window.innerWidth === 768) {

        divStyle.top = '918px';
    }
    else if (window.innerWidth === 800 && window.innerHeight === 1280) {
        divStyle.top = '1180px';
    }
    else if (window.innerWidth === 820 && window.innerHeight === 1180) {
        divStyle.top = '1080px';
    }
    else if (window.innerWidth === 820) {

        divStyle.top = '1074px';
    }
    else if (window.innerWidth === 912) {

        divStyle.top = '1268px';
    }
    else if (window.innerWidth === 1024 && window.innerHeight === 1366) {
        divStyle.top = '1267px';
    }
    else if (window.innerWidth === 1024 && window.innerHeight === 1440) {
        divStyle.top = '1340px';
    }
    else if (window.innerWidth === 1024) {

        divStyle.top = '500px';
    }
    else if (window.innerWidth === 1280) {

        divStyle.top = '700px';
    }


    return (

        <><section class="image-1">

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

                        <div className="section1-button1">
                            <a href='https://play.google.com/store/apps/details?id=com.ArgoGamesRoskilde.Genbrugsspillet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                <img
                                    alt='Get it on Google Play'
                                    src={GoogleLogo}

                                />
                            </a>
                        </div>

                         <div className="section1-button2">
                            <a href="https://apple.co/3QIJ0PL">
                                <img
                                    src={AppStoreLogo}
                                    alt="Download on the App Store"

                                />
                            </a>
                        </div>

                    </div>
                    

                
                </div>

                <div style={{ height: '8%', width: '100%' }}>

                <div style={divStyle}></div>

                </div>

            </div>


        </section>

        </>


    );
};

export default Section1;
 */}}


