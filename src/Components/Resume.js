import React from 'react';

const Resume = (props) => {

    if (props.data) {
        var manPicture = "images/" + props.picture.manPicture;
        var womanPicture = "images/" + props.picture.womanPicture;
        var educationDeibyData = props.data.educationDeiby.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3></div>
        });
        var educationXiomaraData = props.data.educationXiomara.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3></div>
        });
    }

    return (
        <section id="resume">
            <div className="row">
                <div className="five columns align-center about-font">
                    <img className="profile-pic" src={manPicture} alt="User"/>
                    <h1><span>DEIBY SÁENZ RODRÍGUEZ</span></h1>
                    <br/>
                    <div className="row item about-lawyer">
                        <div className="twelve columns">
                            {educationDeibyData}
                            <div className="text-left">
                                <ul>
                                    <li>Universidad Santo Tomás</li>
                                    <li>Magíster en Derechos Humanos</li>
                                    <li>Doctor en Derecho Público</li>
                                    <li>Doctor en Ciencias Jurídicas</li>
                                    <li>Doctor en Ciencias de la Educación</li>
                                    <li>Doctor en estudios legales con énfasis en Derecho Constitucional</li>
                                    <li>Post Doctor en Derechos Humanos</li>
                                </ul>
                                <p>
                                    Con 20 años de experiencia como servidor público, ejerciendo cargos propios como
                                    director del programa de Doctorado en Derecho Público Universidad Santo Tomás,
                                    editor revista científica Principia Iuris Universidad Santo Tomás, docente en el
                                    programa de Maestría en Derechos Humanos Universidad Pedagógica y Tecnológica de
                                    Colombia, docente en el programa de Maestría de Derecho Penal y Procesal Penal
                                    Universidad Santo Tomás, docente en el programa de Especialización en Psicología
                                    Jurídica y Forense Universidad Santo Tomás, Docente titular en Derecho Penal
                                    Universidad Santo Tomás.
                                </p>
                                <ul className="align-center">
                                    <li>Investigador</li>
                                    <li>Escritor</li>
                                    <li>Conferencista</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="five columns align-center">
                    <img className="profile-pic" src={womanPicture} alt="Tim Baker Profile Pic"/>
                    <h1><span>JEIMMY XIOMARA MORALES LEÓN</span></h1>
                    <br/>
                    <div className="row item about-lawyer">
                        <div className="twelve columns">
                            {educationXiomaraData}
                            <div className="text-left">
                                <ul>
                                    <li>Universidad Santo Tomás</li>
                                    <li>Especialista en Derecho Médico – Sanitario Universidad del Rosario</li>
                                    <li>Candidata a Magíster Universidad del Rosario</li>
                                </ul>
                                <p>
                                    Especialista en Responsabilidad Médico – Sanitaria, con gran experiencia en el
                                    litigio, ejerciendo cargos en el sector público, asesora jurídica, cuenta con óptima
                                    idoneidad y capacidades en el área respectiva del ejercicio profesional, con amplia
                                    experiencia en ámbitos de responsabilidad médica; transparencia y responsabilidad
                                    en el asesoramiento, representación, defensa y capacitación de los clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
