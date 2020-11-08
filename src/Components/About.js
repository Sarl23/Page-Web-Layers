import React from 'react';

const About=(props)=> {

    if(props.data){
      var name = props.data.name;
      var profilepic= "images/"+props.data.image;
      var bio = props.data.bio;
      var titleAboutSection = props.data.titleAboutSection;
      var aboutLawyers = props.data.aboutLawyers;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
             <h2>Acerca de nosotros</h2>
             <p>{bio}</p>

             <h2>{titleAboutSection}</h2>
             <p>{aboutLawyers}</p>
         </div>
      </div>

   </section>
    );
}

export default About;
