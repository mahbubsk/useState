import React from 'react';

const BlogLists = (props) => {

    const blogs = props.blogsData;
    const title = props.title;

    const handleDelete = props.handleDelete;
    return ( 
        <div>
            <h3>{title}</h3>
           {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                    <button onClick={handleDelete}>Edit</button> 
                </div>
            ))}
            
        </div> 
    );
}
 
export default BlogLists;