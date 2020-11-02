import React from 'react';

const Contact = (props) => {

  if (props.data) {
    var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var message = props.data.contactmessage;
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="contactName" name="contactName"
                       onChange={this.handleChange}/>
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"
                       onChange={this.handleChange}/>
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject"
                       onChange={this.handleChange}/>
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
              </div>
              <div>
                <button className="submit">Submit</button>
              </div>
            </fieldset>
          </form>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}<br/>
              {street} <br/>
              {city}, {state} {zip}<br/>
              <span>{phone}</span>
            </p>
          </div>
          <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <div className="google-map-code">
              <div className="google-map-code">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1093246198084!2d-73.34637648568516!3d5.5508074352462975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7c6a716aee77%3A0x222341ee842c5b89!2sUniversidad%20Santo%20Tom%C3%A1s%20Campus!5e0!3m2!1ses!2sco!4v1604353711188!5m2!1ses!2sco"
                  style ={{ width:"400" ,height:"300" ,frameBorder:"0" ,style:"border:0;" ,allowFullScreen:"" ,ariaHidden:"false"}}
                  tabIndex="0"/>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
