import React, { useState } from 'react';
import windmill from "./images/windmill.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec4.css'
import bushes from "./images/DividerImages/bushes-removebg-preview.png";
import { MDBAnimation } from "mdbreact";
import ZealandLogo from "./images/LogoImages/ZealandLogo.png";
import Corolab from "./images/LogoImages/corolab-header-logo-1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';




const Section4 = () => {


  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isButtonVisible2, setIsButtonVisible2] = useState(true);

  const [showBox1, setShowBox1] = useState(true);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);

  const handleNext1Click = () => {
    setShowBox1(true);
    setShowBox2(true);
  };

  const handleNext2Click = () => {
    setShowBox2(true);
    setShowBox3(true);
  };



  return (


    <section className="image-4" style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

      <div className='contentDiv'>


        <div className='column1'>
          {showBox1 && (
            <MDBAnimation reveal type="slideInLeft" duration="2s">
              <div className="custom-text-sec4">
                <h1>
                  <img src={ZealandLogo} />
                </h1>
                <div className="text-area-sec4">Zealand</div>
                <div style={{ height: '55px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', paddingTop: '8px', justifyContent: 'flex-end' }}>
                  {isButtonVisible && (
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="prevNextIconsSec4"
                      onClick={() => {
                        handleNext1Click();
                        setIsButtonVisible(false);
                      }}
                    />
                  )}
                </div>
              </div>
            </MDBAnimation>
          )}
        </div>


        <div className='column2' >
          {showBox2 && (
            <MDBAnimation reveal type="fadeIn" duration="1s">
              <div className="custom-text-sec4">
                <h1>
                  <img src={Corolab} />
                </h1>
                <div className="text-area-sec4">Co ro la B</div>
                <div style={{ height: '55px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', paddingTop: '8px', justifyContent: 'flex-end' }}>
                  {isButtonVisible2 && (
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="prevNextIconsSec4"
                      style={{ zIndex: '500' }}
                      onClick={() => {
                        handleNext2Click();
                        setIsButtonVisible2(false);
                      }}
                    />
                  )}
                </div>
              </div>
            </MDBAnimation>
          )}
        </div>


        <div className='column3' >

          {showBox3 && (
            <MDBAnimation reveal type="fadeIn" duration="1s">
              <div className="custom-text-sec4">
                <h1 >
                  <svg width={134} height={50} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.848%" y1="37.906%" x2="73.735%" y2="37.906%" id="linearGradient-1"><stop stop-color="#00387B" offset="0%" /><stop stop-color="#0076C0" offset="100%" /></linearGradient></defs><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="argo-logo" fill-rule="nonzero" fill="url(#linearGradient-1)"><path d="M25.854 4.968c-1.328-2.56-4.396-3.846-9.261-3.846-4.728 0-8.727 1.626-11.862 4.948A16.527 16.527 0 00.003 17.923a16.573 16.573 0 004.728 11.914c3.13 3.27 7.13 4.882 11.862 4.882 4.865 0 7.928-1.303 9.261-3.84v3.453H37.92V1.515H25.854v3.453zM19.193 24.17c-3.782 0-6.997-2.803-6.997-6.251 0-3.448 3.2-6.252 6.997-6.252 3.796 0 6.997 2.888 6.997 6.256 0 3.369-3.2 6.247-6.997 6.247zM62.749.93s-.945-.064-1.494-.064c-4.727 0-8.396 2.083-9.994 5.531V1.515h-7.928v32.812h7.928v-17.25c0-5.405 3.531-8.788 9.063-8.788.85 0 2.425.173 2.425.173V.931zm28.584 5.467C89.399 3.075 85.47.538 79.428.538a16.486 16.486 0 00-12.06 4.883c-3.267 3.27-4.93 7.358-4.93 12.24 0 4.883 1.663 8.985 4.93 12.242a16.688 16.688 0 0012.06 4.816c6.066 0 9.995-2.536 11.928-5.858v2.733c0 4.882-1.134 8.27-3.465 10.157-2.066 1.626-4.799 2.41-8.33 2.41a22.605 22.605 0 01-13.37-4.377l-2.534 3.84a27 27 0 0015.946 5.037c4.596 0 8.33-1.173 11.347-3.453 2.264-1.756 3.73-3.84 4.33-6.316.6-2.477.998-5.794.998-10.027V1.515h-4.945v4.882zm-2.998 20.25c-2.335 2.391-5.332 3.578-8.907 3.578a11.513 11.513 0 01-8.66-3.579c-2.267-2.408-3.4-5.402-3.4-8.984s1.133-6.577 3.4-8.985a11.568 11.568 0 018.66-3.649 11.952 11.952 0 018.931 3.645 12.225 12.225 0 013.598 8.984 12.22 12.22 0 01-3.622 8.99zm40.687-20.9c-3.269-3.254-7.4-4.881-12.396-4.881-4.865 0-8.983 1.625-12.325 4.882-3.343 3.256-5.016 7.293-5.016 12.175 0 4.883 1.664 8.92 4.997 12.176a17.098 17.098 0 0012.325 4.882c4.93 0 9.061-1.627 12.396-4.882 3.31-3.27 4.997-7.293 4.997-12.176 0-4.882-1.65-8.919-4.983-12.175h.005zm-.998 23.44c-2.997 2.994-6.795 4.49-11.393 4.49-4.53 0-8.328-1.496-11.394-4.49a15.438 15.438 0 01-4.534-11.264c0-4.49 1.532-8.204 4.53-11.213 2.996-3.009 6.864-4.56 11.393-4.56 4.529 0 8.396 1.5 11.393 4.56 2.998 3.06 4.6 6.705 4.6 11.213a15.231 15.231 0 01-4.6 11.265h.005z" id="Shape" /></g></g></svg>
                </h1>
                <div className="text-area-sec4">

                  Sort, recylce, repeat
                  Sort, recylce, repeat
                  Sort, recylce, repeat
                  Sort, recylce, repeat
                  Sort, recylce, repeat
                  Sort, recylce, repeat
                  Sort, recylce, repeat

                </div>
                <div style={{ height: '55px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', paddingTop: '8px', justifyContent: 'flex-end' }}>

                </div>
              </div>
            </MDBAnimation>
          )}

        </div>
        
        <div className='column4' >
         
        </div>


      



      </div>


      <div className="windmill-container">
        <img
          src={windmill}
          
          className="windmill"
        />
      </div>


      <div className="bushes-container">
        <img
          src={bushes}
          style={{ zIndex: '501' }}
          className="bushes"
        />
      </div>


    </section>


  );
};

export default Section4;





