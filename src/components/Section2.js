import React from 'react';
import Features from './features';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec2.css'




function Section2() {
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
          <div className='textdiv'>

            <h1 style={{ marginBottom: '6%', marginTop: '3%', fontWeight: '350', textAlign:'center' }}>
              
              Udstyr dig selv med virkelighedsnære evner indenfor genbrug med vores spil.

            </h1>

          </div>

          <Features />


          {/**   <div style={{position:'absolute', right:'100px', bottom:'30px', zIndex:'500'}}>
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
            */}

        </div>
      </div>
    </div>
  );
}

export default Section2;





