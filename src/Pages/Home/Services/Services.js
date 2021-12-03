import React from 'react';
import './Services.css'
import service1 from '../../../images/service (1).jpeg'
import service2 from '../../../images/service (2).jpeg'
import service3 from '../../../images/service (3).jpeg'

const Services = () => {
    return (
        <div className="service-main">
            <div className="container py-5">
                <h1 data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">My Awesome Service</h1>
                <div className="row mt-5">
                    <div className="col-lg-4" data-aos="zoom-in-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <img className="img-fluid" src={service3} alt="" />
                        <h2 className="mt-4 text-info">Web Design</h2>
                    </div>
                    <div className="col-lg-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <img className="img-fluid" src={service2} alt="" />
                        <h2 className="mt-4 text-info">Frontend Development</h2>
                    </div>
                    <div className="col-lg-4" data-aos="zoom-in-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <img className="img-fluid" src={service1} alt="" />
                        <h2 className="mt-4 text-info">Fullstack Development</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Services;