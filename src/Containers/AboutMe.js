import React from 'react';

const AboutMe = () => {
    const photo = require("../Visuals/Photo.png");

    return(
        <div id="about-me"> 
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h2>About Me</h2>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div id="photo">
                            <img className="photo" src={photo} alt="April"/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="description">
                            <p>
                                Hi there, my name is April and I'm a full-stack software engineer graduate from the Flatiron School.
                                <br/><br/>
                                I worked in the fashion industry for over nine years. I started out in retail as a sales associate and <br/>
                                graduadely made my way into retail management as a keyholder. At the same time, I took on internship<br/>
                                opportunities that eventually led me to a corporate opposition in production management.
                                <br/><br/>
                                I enjoy being a software engineer because I get to build effective and efficient systems that basically <br/>
                                make life easier. I also love being able to express my creative side and design visually aesthetic font-<br/>
                                end development.
                                <br/><br/>
                                I'm open to explore opportunities and willing to relocating. Let's <a className="color" href="#contact">connect</a>!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
