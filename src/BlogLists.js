import React from 'react';

const BlogLists = ({blogs, title}) => {


    return ( 
        <div>
            <h3>{title}</h3>
           {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button>Delete</button>
                    <button>Edit</button> 
                </div>
            ))}
            
        </div> 
    );
}
 
export default BlogLists;