import React from 'react';
import './Contact.css'
import bg from '../../images/contact.jpg'
import emailjs from 'emailjs-com'

const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_72xgoan', 
        'template_bs3mknl', 
        e.target, 
        'user_kpIRP69yoGHDcEjWWdW1h')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err));
        
        
    }
  


    return (
        <div 
       style={{
              background: `url(${bg})`,
            }}
        >
            <div className="row py-5 ">
                <div className="col-lg-4 "></div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="contact-form text-white " data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h1>Get in touch now</h1>
                        <form onSubmit={sendEmail} >
                            <div class="my-3">
                                <input type="text" class="form-control input" name="name" required placeholder="name"/>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control input" name="user_email" required  placeholder="e-mail"/>
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control textarea" name="message"  placeholder="type your message here" rows="3"></textarea>
                            </div>
                            <input className="btn btn-info w-100 mb-3" type="submit" value="Send" />
                        </form>
                    </div>
                    
                </div>
               
                <div className="col-lg-4"></div>
            </div>

            <div className="container py-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contac-box" data-aos="zoom-in-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <span><i class="fas fa-phone-volume"></i></span>
                        <h2>Phone</h2>
                        <p>+88 01756104126</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contac-box" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <span><i class="fas fa-envelope"></i></span>
                        <h2>Email</h2>
                        <p>mkraihan207@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contac-box " data-aos="zoom-in-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <span><i class="fas fa-map-marker-alt"></i></span>
                        <h2>Address</h2>
                        <p>Mymensingh, Bangladesh</p>
                    </div>
                </div>
            </div>
            </div>
    
       </div>
    );
};

export default Contact;