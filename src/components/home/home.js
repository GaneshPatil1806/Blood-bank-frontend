import './Home.css'
import Footer from '../footer/Footer'
import Carousel from '../carousel/Carousel';
import React from 'react';

const Home = () => {

  return (
    <div clasName="Home">

      <div clasName="container1">
        <Carousel />
      </div>

      <div className="container5">
        <Footer />
      </div>

    </div >
  );
}

export default Home;