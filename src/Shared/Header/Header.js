import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'


import {  Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='main-header pt-4'>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
              <div class="container">
                <a class="navbar-brand" href="/"> <img className="logo" src={logo} alt="" /> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink  to="/home" className="nav-link text-white">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/portfolio" className="nav-link text-white">Portfolio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="text-decoration-none" target="_blank" href="https://drive.google.com/file/d/1QvFJD2QRRnXDbw9GyfV2A7GhUXxxemdC/view?usp=sharing">
                    <p className="nav-link text-white ">Resume</p>
                    </a>
                  </li>
                </ul>
                  <NavLink to="/contact">
                  <button className="btn btn-outline-info">Hire Me</button>
                  </NavLink>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Header;