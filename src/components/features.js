import React from 'react';
import Collect from "./images/recycleBorder.png";
import Container1 from "./images/container 1.png";
import recycleIcon from "./images/recycle-symbol.png";
import hammer3 from "./images/hammer_3test-removebg.png";
import './Features.css';



function Features() {


    const elements = [
        { title: "Help to keep city clean", imgSrc: Collect, alt: "opsamle billedet", description: "Samle affald i byen til at få ressourcer og ølagte ting til bygge nye genstande" },
        { title: "Receive contracts from local authorities", imgSrc: Container1, alt: "Genbrugs billedet", description: " Organisere affald i forskellige ressourcer ved containerne" },
        { title: "Craft and sell new items", imgSrc: hammer3, alt: "byg billedet", description: "byg nye ting med ressourcerne og klar ordre og kontrakter med det " },
        { title: "Learn about recycling while playing", imgSrc: recycleIcon, alt: "Genanvend billedet", description: "Genanvend ølagte ting  og lav dem til ressourcer" },
        { title: "Test your knowledge in quizzes", imgSrc: recycleIcon, alt: "Genanvend billedet", description: "Genanvend ølagte ting  og lav dem til ressourcer" },

    ];

    return (

        <div class="Feature row justify-content-center " >
            {elements.map((element, index) => (
                <div className='featureDiv' key={index} >

                    <img
                        class="img-responsive rounded-circle p-3 "
                        src={element.imgSrc}
                        alt={element.alt}
                        style={{
                            width: '100%',
                            background: 'rgb(46,127,223)',
                            background: 'linear-gradient(0deg, rgba(46,127,223,1) 0%, rgba(52,216,252,1) 100%)',
                        }}
                    />
                    <h3 class='rounded p-1 border-1 border-dark border-1 text-center' style={{ color: '#0b2444', fontSize: '22px', marginTop: '15px' }}>{element.title}</h3>

                </div>
            ))}
        </div>

    );

}
export default Features;