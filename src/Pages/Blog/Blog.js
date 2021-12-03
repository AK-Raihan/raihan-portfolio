import React from 'react';
import img from '../../images/blogs.png'
import './Blog.css'

const Blog = ({blog}) => {
    return (
        <div class="col">
                <div class="card blog-card text-start">
                <img src={img}class="card-img-top img-fluid" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title">{blog.name}</h3>
                    <h4 class="card-title">{blog.number}</h4>
                    <h5 class="card-title">{blog.date}</h5>
                    <p >ional content.ional content.ional content. This content is a little bit longer. This content is a little bit longer. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
    );
};

export default Blog;