import React from 'react';
import './About.css'
import img from '../../images/about.png'
import { Button, ProgressBar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
                            <p>Hi, I am Raihan. From Bangladesh. I think, as a Frontend Developer my skill is perfect.
                            I am self-motivated so I can work alone but I also have great interpersonal skills that make it easy to work with a team both inside and outside the my country. I can work on more than one project.
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
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="progress-bar">
                            <h2>Top Skill</h2>
                        <ProgressBar variant="success" className="mt-3" label={`Html ${90}%`} animated now={90} />
                        <ProgressBar variant="info" className="mt-3" label={`Css ${85}%`} animated now={85} />
                        <ProgressBar variant="success" className="mt-3" label={`Bootstrap ${90}%`} animated now={90} />
                        <ProgressBar variant="info" className="mt-3" label={`javascript ${85}%`} animated now={85} />
                        <ProgressBar variant="warning" className="mt-3" label={`React js ${80}%`} animated now={80} />
                        <ProgressBar variant="danger" className="mt-3" label={`Node js ${65}%`} animated now={65} />
                        <ProgressBar variant="info" className="mt-3" label={`Mongodb ${80}%`} animated now={80} />
                        <ProgressBar variant="primary" className="mt-3" label={`Express${70}%`} animated now={70} />
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default About;