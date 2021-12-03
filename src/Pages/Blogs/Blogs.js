import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('./blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="blogs-main py-5">
            <div className="container">
            <h1 className="text-white pb-5 pt-3">My Blog is Comming Soon....</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                
            {
                blogs.map(blog=><Blog 
                    key={blog.code}
                    blog={blog}
                ></Blog>)
            }
            </div>
            </div>
        </div>
    );
};

export default Blogs;