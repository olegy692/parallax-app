import React from 'react';
import Features from './features';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sec1.css'




function Section2() {
  return (
   
    <div className='divbetween1'
    style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /*backgroundColor: '#0b2444',*/
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
  );
}



export default Section2;


