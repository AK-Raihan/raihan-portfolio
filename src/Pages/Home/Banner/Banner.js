import React from 'react';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter';
import raihan from '../../../images/raihan (0).png'
import Animation from '../Animation/Animation';
import SocialLink from '../../SocialLink/SocialLink';


const Banner = () => {
    
    return (
        <div className='banner-main pt-5'>
            <Animation></Animation>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6" >
                        <div className=" text-start text-white d-flex align-items-center">
                        <div className="banner-content" data-aos="fade-right" data-aos-duration="2000">
                        <h5 >Welcome to my world</h5>
                        <h1 >  Hi, I'm Koushik Raihan</h1>
                    <h1> I build   
                <span className="text-danger ms-3">
                    <Typewriter
                        words={['web interface', 'e-commerce site', 'portfolio website', 'service website' ]}
                        loop={50}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                    </h1>
                    <h3 className="text-white">based in world wide</h3>
                    <a target="_blank" href="https://drive.google.com/file/d/1QvFJD2QRRnXDbw9GyfV2A7GhUXxxemdC/view?usp=sharing"><button className="btn btn-outline-info" >Dawnload Resume</button></a>
                        </div>
                        </div>
                        <SocialLink></SocialLink>
                    </div>
                    
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="banner-img " 
                            data-aos="fade-left"
                            
                            data-aos-duration="2000">
                        <img className="img-fluid" src={raihan} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;