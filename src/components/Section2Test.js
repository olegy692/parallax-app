import React from 'react';
import FeaturesTest from './featuresTest';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec2.css'
import malePic from './images/Male-25.png'

import Wave from 'react-wavify'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';




function Section2Test() {
    return (
        <div
            className="divbetween1"
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgb(49, 140, 245)',
                background: 'linear-gradient(0deg, rgba(240, 244, 249, 1) 0%, rgba(52, 216, 252, 1) 100%)',
                position: 'relative',

            }}
        >
            <div style={{ padding: '20px' }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


                    <h2 style={{ color: '#0b2444', marginBottom: '20px', paddingTop: '20px' }}>
                        Equip Yourself with Real-Life Recycling Skills in Our Game
                    </h2>


                    <FeaturesTest />


                    <div style={{ position: 'absolute', right: '100px', bottom: '30px', zIndex: '500' }}>
                        <ParallaxProvider>
                            <Parallax speed={10}>
                                <div>
                                    <img src={malePic}
                                        height={200}
                                        width={100}
                                    >
                                    </img>

                                </div>
                            </Parallax>
                        </ParallaxProvider>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Section2Test;