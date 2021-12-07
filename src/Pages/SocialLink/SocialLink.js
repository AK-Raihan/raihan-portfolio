import React from 'react';
import './SocialLink.css'

const SocialLink = () => {
    return (
        <div>
            <ul className="social-link">
                <li><a target="_blank" href="https://github.com/MK-Raihan"> <span><i class="fab fa-github"></i> </span> </a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/abu-koushik-raihan-b14583216/"> <span><i class="fab fa-linkedin"></i> </span> </a></li>
                <li><a target="_blank" href="https://twitter.com/KoushikRaihan"> <span><i class="fab fa-instagram-square"></i> </span> </a></li>
                <li><a target="_blank" href="https://www.facebook.com/ak.raihan29/"> <span><i class="fab fa-facebook"></i> </span> </a></li>
            </ul>
        </div>
    );
};

export default SocialLink;