import React, { useEffect, useState, useRef } from 'react';
import './sec1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo123.png';
import gbTruck from './images/zaza-512.png'


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
        divStyle.top = '567px';
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

                        <div className="d-flex section1-button1">
                            <a href='https://play.google.com/store/apps/details?id=com.ArgoGamesRoskilde.Genbrugsspillet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                <img
                                    alt='Get it on Google Play'
                                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'

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
            </div>

            <div style={divStyle}></div>

        </section>

        </>


    );
};

export default Section1;



