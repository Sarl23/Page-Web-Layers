import React from 'react';

const About=(props)=> {

    if(props.data){
      var teamPicture = "images/"+props.data.teamPicture;
      var bio = props.data.bio;
      var titleAboutSection = props.data.titleAboutSection;
      var aboutLawyers = props.data.aboutLawyers;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
             <img className="profile-pic" src="images/circle_logo.png" alt="Logo"/>
         </div>
         <div className="nine columns main-col">
             <h2>Acerca de nosotros</h2>
             <p>{bio}</p>
         </div>
      </div>
      <div className="row">
         <div className="three columns">
             <img className="profile-pic"  src={teamPicture} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
             <h2>{titleAboutSection}</h2>
             <p>{aboutLawyers}</p>
         </div>
      </div>

   </section>
    );
}

export default About;
