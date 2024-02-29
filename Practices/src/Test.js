// import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
// import HeroImage1 from '../../assets/images/HeroImage1.png';
// import HeroImage2 from '../../assets/images/HeroImage2.png';
// import HeroImage3 from '../../assets/images/HeroImage3.png';
// import './HeroSlider.module.css'; // Import a custom CSS file for styling

function HeroSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="hero-carousel">
      <Carousel.Item>
        <div className="hero-slide">
          <div className="hero-content">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          <img src={HeroImage1} alt="First slide" className="hero-image" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero-slide">
          <div className="hero-content">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <img src={HeroImage2} alt="Second slide" className="hero-image" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero-slide">
          <div className="hero-content">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
          <img src={HeroImage3} alt="Third slide" className="hero-image" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;