import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Divider from './components/divider';
import Footer from './components/Footer/Footer';
import './components/app.css'
import Carousel from './components/Carousel';
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (

    <div className="App">

      <Header />

      <Section1 />

      <Divider></Divider>

      <Section2 />

      <ParallaxProvider>
        <Carousel></Carousel>
      </ParallaxProvider>

      <Section3 />

      <Section4 />

      <Footer />
    </div>

  );
}

export default App;