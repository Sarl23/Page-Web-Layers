import React from 'react';

const Portfolio = (props) => {

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Mira algunos de nuestros libros</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="Análisis explicativo del debido proceso y su influencia en el régimen disciplinario para
                  los servidores públicos" src="images/books/debido_proceso.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Análisis explicativo del debido proceso y su
                        influencia en el régimen disciplinario para los servidores públicos</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="Derecho disciplinario Fuerzas militares de Colombia" src="images/books/derecho_disciplinario.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Derecho disciplinario Fuerzas militares de Colombia</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="Documentología y Grafología forence colombiana" src="images/books/documentologia.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Documentología y Grafología forence colombiana</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="El debido proceso y su materialización en el régimen disciplinario para los servidores
                  públicos" src="images/books/el_debido_proceso.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>El debido proceso y su materialización en el régimen disciplinario para los servidores
                        públicos</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="Reinserción social" src="images/books/reinsercion.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Reinserción social</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
