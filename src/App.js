import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Divider from './components/divider';
import Footer from './components/Footer';
import './components/app.css'


import Section2Test from './components/Section2Test';


import ParaBan from './components/testing';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Container } from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <Header />
      <Section1 />

      <Divider></Divider>

     <Section2/>  

      <ParallaxProvider>
        <ParaBan></ParaBan>
      </ParallaxProvider>

     <Section3/>

      <Section4 />

      <Footer />
    </div>

  );
}

export default App;