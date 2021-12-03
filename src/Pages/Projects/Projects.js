import React from 'react';
import './Projects.css'
import project1 from '../../images/project (1).png'
import project2 from '../../images/project (2).png'
import project3 from '../../images/project (3).png'
import project4 from '../../images/project (4).png'
import project5 from '../../images/project (5).png'
import project6 from '../../images/project (6).png'

const Projects = () => {


    return (
       <div className="project-main py-5">
           <div className="porject-header text-white">
               <h2>Portfolio</h2>
               <h4>My Recent Project</h4>
           </div>
            <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 project-card ">
                    <div className="card-img" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500"><img src={project6} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                        <h2 class="card-title">Hero Tea</h2>
                        <p class="card-text"> 
                        <h5 className="text-start">usees tecnologies</h5>
                            <ul className="list-unstyled g-2 d-flex flex-wrap card-details">
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>MongoDb</li>
                                <li>Express js</li>
                                <li>Firebase</li>
                                <li>Horuku</li>
                                <li>Bootstrap</li>
                                <li>MUI</li>
                            </ul>
                        </p>
                        <p class="card-text"> 
                        <h5 className="text-start">Summary</h5>
                            <ul className="g-2 card-details">
                                <li className="text-start">Firebase authentication</li>
                                <li className="text-start">User and Admin dashboard</li>
                                <li className="text-start">user order and drop review</li>
                                
                            </ul>
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-around">
                        <a target="_blank" href="https://hero-tea.web.app/"> <button className="btn btn-outline-info">Live site</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/hero-tea-niche-product-client"> <button className="btn btn-outline-info">Github Client</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/hero-tea-niche-product-server"> <button className="btn btn-outline-info">Github Server</button></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 project-card">
                    <div className="card-img" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">
                    <img src={project5} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Mind Fresh Travelling</h2>
                        <p class="card-text"> 
                        <h5 className="text-start">usees tecnologies</h5>
                            <ul className="list-unstyled g-2 d-flex flex-wrap card-details">
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>MongoDb</li>
                                <li>Express js</li>
                                <li>Firebase</li>
                                <li>Horuku</li>
                                <li>Bootstrap</li>
                                <li>MUI</li>
                            </ul>
                        </p>
                        <p class="card-text"> 
                        <h5 className="text-start">Summary</h5>
                            <ul className="g-2 card-details">
                                <li className="text-start">Firebase authentication</li>
                                <li className="text-start">User and Admin dashboard</li>
                                <li className="text-start">user order and drop review</li>
                                
                            </ul>
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-around">
                        <a target="_blank" href="https://mind-fress-traveling.web.app/"> <button className="btn btn-outline-info">Live site</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/mind-fresh-travelling-client"> <button className="btn btn-outline-info">Github Client</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/mind-fresh-travelling-server"> <button className="btn btn-outline-info">Github Server</button></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 project-card">
                    <div className="card-img" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">
                    <img src={project3} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Medi Door</h2>
                        <p class="card-text"> 
                        <h5 className="text-start">usees tecnologies</h5>
                            <ul className="list-unstyled g-2 d-flex flex-wrap card-details">
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>MongoDb</li>
                                <li>Express js</li>
                                <li>Firebase</li>
                                <li>Horuku</li>
                                <li>Bootstrap</li>
                                <li>MUI</li>
                            </ul>
                        </p>
                        <p class="card-text"> 
                        <h5 className="text-start">Summary</h5>
                            <ul className="g-2 card-details">
                                <li className="text-start">Firebase authentication</li>
                                <li className="text-start">User and Admin dashboard</li>
                                <li className="text-start">user order and drop review</li>
                                
                            </ul>
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-around">
                        <a target="_blank" href="https://medi-door-asmnt-10.netlify.app/"> <button className="btn btn-outline-info">Live site</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/medi-door-health-care"> <button className="btn btn-outline-info">Github </button></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 project-card">
                    <div className="card-img" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">
                    <img src={project1} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Operation Sundarban</h2>
                        <p class="card-text"> 
                        <h5 className="text-start">usees tecnologies</h5>
                            <ul className="list-unstyled g-2 d-flex flex-wrap card-details">
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>MongoDb</li>
                                <li>Express js</li>
                                <li>Firebase</li>
                                <li>Horuku</li>
                                <li>Bootstrap</li>
                                <li>MUI</li>
                            </ul>
                        </p>
                        <p class="col-lg-4 col-md-6"> 
                        <h5 className="text-start">Summary</h5>
                            <ul className="g-2 card-details">
                                <li className="text-start">Firebase authentication</li>
                                <li className="text-start">User and Admin dashboard</li>
                                <li className="text-start">user order and drop review</li>
                                
                            </ul>
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-around">
                        <a target="_blank" href="https://operation-sundarban-asmnt-8.netlify.app/"> <button className="btn btn-outline-info">Live site</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/operation-sundarban-super-hero"> <button className="btn btn-outline-info">Github</button></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 project-card">
                    <div className="card-img" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">
                    <img src={project2} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Language School</h2>
                        <p class="card-text"> 
                        <h5 className="text-start">usees tecnologies</h5>
                            <ul className="list-unstyled g-2 d-flex flex-wrap card-details">
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>MongoDb</li>
                                <li>Express js</li>
                                <li>Firebase</li>
                                <li>Horuku</li>
                                <li>Bootstrap</li>
                                <li>MUI</li>
                            </ul>
                        </p>
                        <p class="card-text"> 
                        <h5 className="text-start">Summary</h5>
                            <ul className="g-2 card-details">
                                <li className="text-start">Firebase authentication</li>
                                <li className="text-start">User and Admin dashboard</li>
                                <li className="text-start">user order and drop review</li>
                                
                            </ul>
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-around">
                        <a target="_blank" href="https://language-school-asmnt-9.netlify.app/"> <button className="btn btn-outline-info">Live site</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/language-school-service-load"> <button className="btn btn-outline-info">Github</button></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 project-card">
                    <div className="card-img" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">
                    <img src={project4} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Responsive Football</h2>
                        <p class="card-text"> 
                        <h5 className="text-start">usees tecnologies</h5>
                            <ul className="list-unstyled g-2 d-flex flex-wrap card-details">
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>MongoDb</li>
                                <li>Express js</li>
                                <li>Firebase</li>
                                <li>Horuku</li>
                                <li>Bootstrap</li>
                                <li>MUI</li>
                            </ul>
                        </p>
                        <p class="card-text"> 
                        <h5 className="text-start">Summary</h5>
                            <ul className="g-2 card-details">
                                <li className="text-start">Firebase authentication</li>
                                <li className="text-start">User and Admin dashboard</li>
                                <li className="text-start">user order and drop review</li>
                                
                            </ul>
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-around">
                        <a target="_blank" href="https://mk-raihan.github.io/responsive-football/"> <button className="btn btn-outline-info">Live site</button></a>
                        <a target="_blank" href="https://github.com/MK-Raihan/responsive-football"> <button className="btn btn-outline-info">Github</button></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Projects;