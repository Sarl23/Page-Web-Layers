import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './test.css';

const Header = (props) => {

  const content = [
    {
      title: 'Cuente con una firma seria',
      description: 'Capaz de resolver cualquier consulta en casos de Responsabilidad Médica, Derecho Disciplinario Para Fuerzas Militares, Policía e Inpec y Áreas Afines',
      image: 'https://raw.githubusercontent.com/Sarl23/csv-and-files/master/pageWebLawyers/carousel/carousel_1.jpg',
    },
    {
      title: '¡Somos su mejor opción!',
      description: 'Dentro de un amplio catálogo de servicios jurídicos que cuenta con la facilidad de acercamiento al cliente',
      image: 'https://raw.githubusercontent.com/Sarl23/csv-and-files/master/pageWebLawyers/carousel/carousel_2.jpg',
    },
    {
      title: 'Responsabilidad corporativa',
      description: 'Cada uno de nuestros casos se asume con el mejor profesionalismo que hemos adquirido en el transcurso de nuestra experiencia',
      image: 'https://raw.githubusercontent.com/Sarl23/csv-and-files/master/pageWebLawyers/carousel/carousel_3.jpg',
    }
  ];

  return (
    <section id="home">
      <div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#about">Acerca</a></li>
            <li><a className="smoothscroll" href="#resume">Equipo</a></li>
            <li><a className="smoothscroll" href="#portfolio">Libros</a></li>
            <li><a className="smoothscroll" href="#testimonials">Comentarios</a></li>
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
