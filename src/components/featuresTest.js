import React from 'react';
import Collect from "./images/recycleBorder.png";
import Container1 from "./images/container 1.png";
import recycleIcon from "./images/recycle-symbol.png";
import hammer3 from "./images/hammer_3test-removebg.png";
import './Features.css';

function FeaturesTest() {
    const elements = [
      { title: "Opsamle", imgSrc: Collect, alt: "opsamle billedet", description: "Samle affald i byen til at få ressourcer og ølagte ting til bygge nye genstande" },
      { title: "Genbrug", imgSrc: Container1, alt: "Genbrugs billedet", description: "Organisere affald i forskellige ressourcer ved containerne" },
      { title: "Byg", imgSrc: hammer3, alt: "byg billedet", description: "Byg nye ting med ressourcerne og klar ordre og kontrakter med det " },
      { title: "Genanvend", imgSrc: recycleIcon, alt: "Genanvend billedet", description: "Genanvend ølagte ting  og lav dem til ressourcer" },
    ];
  
    return (
      <div className="row justify-content-center">
        {elements.map((element, index) => (
          <div
            className="col-md-5"
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              className="rounded p-3 hover-effect text-center"
              style={{
                maxWidth: '200px',
                marginRight: '10px',
                padding:'0' 
              }}
            >
              <img
                className="img-responsive rounded-circle p-3"
                src={element.imgSrc}
                alt={element.alt}
                style={{
                  width: '100%',
                  background: 'rgb(46,127,223)',
                  background: 'linear-gradient(0deg, rgba(46,127,223,1) 0%, rgba(52,216,252,1) 100%)',
                }}
              />
              <h3 className="rounded p-1 border-1 border-dark border-1" style={{ color: '#0b2444', fontSize: '22px', marginTop: '15px' }}>{element.title}</h3>
            </div>
            <div
              className="rounded p-3 text-center"
              style={{
                background: 'transparent',
                flex: 1, // Take remaining space
              }}
            >
              <p>{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default FeaturesTest;
  
  
  
  
  
  