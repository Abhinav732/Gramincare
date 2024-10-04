import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
  return (
    <div style={{ display: 'block'}} >
      <Carousel className='corousel'>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://images.all-free-download.com/images/graphiclarge/health_care_banner_template_elegant_female_doctor_6931586.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
        
            {/* <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://c8.alamy.com/comp/2ACJAGH/doctor-holding-a-check-up-paper-and-pointing-by-index-finger-health-check-up-banner-2ACJAGH.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
         
            {/* <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}