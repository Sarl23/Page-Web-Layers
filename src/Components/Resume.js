import React from 'react';

const Resume = (props) => {

    if (props.data) {
        var profilePicture = "images/" + props.picture.image;
        var educationDeibyData = props.data.educationDeiby.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree}
                <br /><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
        });
        var educationXiomaraData = props.data.educationXiomara.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree}
                <br /><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
        });
    }

    return (
        <section id="resume">
            <div className="row">
                <div className="five columns align-center">
                    <img className="profile-pic" src={profilePicture} alt="User"/>
                    <h1><span>DEIBY SAENZ ROGRIGUEZ</span></h1>
                    <br />
                    <div className="row item">
                        <div className="twelve columns">
                            {educationDeibyData}
                        </div>
                    </div>
                </div>
                <div className="five columns align-center">
                    <img className="profile-pic"  src={profilePicture} alt="Tim Baker Profile Pic" />
                    <h1><span>JEIMMY XIOMARA MORALES LEON</span></h1>
                    <br />
                    <div className="row item">
                        <div className="twelve columns">
                            {educationXiomaraData}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
