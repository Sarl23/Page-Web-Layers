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
                  <img alt="Análisis Explicativo Del Debido Proceso y Su Influencia En El Régimen Disciplinario Para
                  Los Servidores Públicos" src="images/books/debido_proceso.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Análisis Explicativo Del Debido Proceso y Su Influencia En El Régimen Disciplinario Para
                          Los Servidores Públicos</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="Derecho Disciplinario Fuerzas Militares de Colombia" src="images/books/derecho_disciplinario.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Derecho Disciplinario Fuerzas Militares de Colombia</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="Documentología y Grafología Forence Colombiana" src="images/books/documentologia.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Documentología y Grafología Forence Colombiana</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="El Debido Proceso y Su Materialización En El Régimen Disciplinario Para Los Servidores
                  Públicos" src="images/books/el_debido_proceso.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>El Debido Proceso y Su Materialización En El Régimen Disciplinario Para Los Servidores
                          Públicos</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img alt="Reinserción Social" src="images/books/reinsercion.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Reinserción Social</h5>
                      <p>Deiby Alberto Sáenz Rodríguez</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="columns portfolio-item">
                <a href={"https://www.amazon.com/-/es/Deiby-S%C3%A1enz-Rodr%C3%ADguez-ebook/dp/B08QZYFLZ6/ref=mp_s_a_1_1?dchild=1&keywords=Constitucionalismo+disciplinario&qid=1608406234&sr=8-1"}
                   target="_blank">
                    <div className="item-wrap">
                        <img
                            alt="Constitucionalismo Disciplinario Para Las Fuerzas Militares de Colombia"
                            src="images/books/constitucionalismo.png"/>
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>Constitucionalismo Disciplinario Para Las Fuerzas Militares de Colombia</h5>
                                <p>Deiby Alberto Sáenz Rodríguez</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="columns portfolio-item">
                <a href={"#"}
                   target="_blank">
                    <div className="item-wrap">
                        <img
                            alt="La Política Pública Carcelaria Y Los Procesos de Reinserción Social En El Tratamiento Penitenciario En Colombia"
                            src="images/books/politica_publica_carcelaria.png"/>
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>La Política Pública Carcelaria Y Los Procesos de Reinserción Social En El Tratamiento Penitenciario En Colombia</h5>
                                <p>Deiby Alberto Sáenz Rodríguez</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
