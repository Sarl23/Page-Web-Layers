import React from 'react';

const Resume = (props) => {

    if (props.data) {
        var profilePicture = "images/" + props.picture.image;
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em
                    className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
        });
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
            </div>
        })
    }

    return (
        <section id="resume">
            <div className="row">
                <div className="five columns align-center">
                    <img className="profile-pic" src={profilePicture} alt="Picture"/>
                    <h1><span>Education</span></h1>
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
                <div className="five columns align-center">
                    <img className="profile-pic"  src={profilePicture} alt="Tim Baker Profile Pic" />
                    <h1><span>Work</span></h1>
                    <div className="row item">
                        <div className="twelve columns">
                            {work}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
