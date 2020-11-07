import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './test.css';

const Header = (props) => {

  const content = [
    {
      title: 'Vulputate Mollis Ultricies Fermentum Parturient',
      description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      image: 'https://raw.githubusercontent.com/Sarl23/Page-Web-Layers/imprv/information/public/images/carousel/carousel_1.jpg?token=AFZOMBHFFPNBOYSA7PHLWJS7U4DVG',
    },
    {
      title: 'Tortor Dapibus Commodo Aenean Quam',
      description:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
      image: 'https://raw.githubusercontent.com/Sarl23/Page-Web-Layers/imprv/information/public/images/carousel/carousel_2.jpg?token=AFZOMBAHKCGIJU4QBWIZEB27U355I',
    },
    {
      title: 'Phasellus volutpat metus',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      image: 'https://raw.githubusercontent.com/Sarl23/Page-Web-Layers/imprv/information/public/images/carousel/carousel_3.jpg?token=AFZOMBDTO5SE7UXX7KTLEPK7U3566',
    }
  ];

  return (
    <section id="home">
      <div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
            <li><a className="smoothscroll" href="#about">Acerca</a></li>
            <li><a className="smoothscroll" href="#resume">Equipo</a></li>
            <li><a className="smoothscroll" href="#portfolio">Libros</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <Slider autoplay={3000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{background: `url('${item.image}') no-repeat center center`}}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Header;
