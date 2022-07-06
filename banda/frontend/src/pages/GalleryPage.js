import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Normalize.css'
import '../App.css'
import '../styles/components/pages/GalleryPage.css';

// const GalleryPage = (props) => {
export default class GalleryPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 1000,
      cssEase: "linear" 
    };  
    return (
      <section className="main-section">
      <h2>Galería</h2>
      <article>
        <div className="gallery">
          <Slider {...settings}>
            <img src="img/dmb-1.png" alt="dmb-1.png" />
            <img src="img/dmb-2.png" alt="dmb-2.png" />
            <img src="img/dmb-3.png" alt="dmb-3.png" />
            <img src="img/dmb-4.png" alt="dmb-4.png" />
            <img src="img/dmb-5.png" alt="dmb-5.png" />
            <img src="img/dmb-6.png" alt="dmb-6.png" />
            <img src="img/dmb-7.png" alt="dmb-7.png" />
          </Slider>
        </div>
      </article>
      
    </section>  
    );
  }
}

// export default GalleryPage;