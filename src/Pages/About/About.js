import React from 'react';
import './About.css'
import img from '../../images/about.png'
import { NavLink } from 'react-router-dom';
import img1 from '../../images/img (1).png'
import img2 from '../../images/img (9).png'
import img3 from '../../images/img (11).png'
import img4 from '../../images/img (10).png'
import img5 from '../../images/img (15).png'
import img6 from '../../images/img (6).png'
import img7 from '../../images/img (5).png'
import img8 from '../../images/img (12).png'
import img9 from '../../images/img (2).png'
import img10 from '../../images/img (3).png'
import img11 from '../../images/img (4).png'
import img12 from '../../images/img (7).png'
import img13 from '../../images/img (8).png'
import img14 from '../../images/img (13).png'
import img15 from '../../images/img (14).png'

const About = () => {
    return (
        <div className="about-main py-5">
            <div className="container">
                <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                <h1 className="about-header">About Me</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="about-img" data-aos="fade-up" data-aos-duration="2000">
                                <img className="img-fluid" src={img} alt="" />
                        </div>    
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="about-content text-start" data-aos="fade-down" data-aos-duration="2000">
                            <h2>I'm a Passionate</h2>
                            <h4>Web developer</h4>
                            <p>Hi, I am Raihan. From Bangladesh. I think, as a Frontend Developer my img is perfect.
                            I am self-motivated so I can work alone but I also have great interpersonal imgs that make it easy to work with a team both inside and outside the my country. I can work on more than one project.
                            </p>
                            <NavLink to="/contact" >
                                <button data-aos="zoom-in-up"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000" className="p-2 btn btn-outline-info">Know me better
                                </button>
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
                <div className="skill">
                    <h1>Top Skill</h1>
                <div className="row" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img1} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img2} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img3} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img4} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img5} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img6} alt="" />
                    </div>
                    <div className=" col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img7} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img8} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img9} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img10} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img11} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img12} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img13} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img14} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img className="img-fluid" src={img15} alt="" />
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;