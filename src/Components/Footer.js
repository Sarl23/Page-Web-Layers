import React from 'react';

const Footer = (props) =>  {

    if(props.data){
        var networks = props.data.social.map(function(network){
            return <li key={network.name}><a target={'_blank'} href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return(
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Copyright 2020 by</li> <a target={'_blank'} title="Styleshout" href="https://twitter.com/jimmyale3201">@jimmyale3201</a>&nbsp;
                        <a target={'_blank'} title="Styleshout" href="https://twitter.com/Sergio_Rojas05">@Sergio_Rojas05</a>
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    )
};

export default Footer;
