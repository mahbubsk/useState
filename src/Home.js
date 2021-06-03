import React, {  useState, useEffect } from 'react';
import BlogLists from './BlogLists';

const Home = () => {
  
  const [blogs, setBlogs] = useState(null)



  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog=>blog.id !== id);
    setBlogs(newBlogs);
  }

 
  useEffect(() =>{
    fetch('http://localhost:8000/blogs')
      .then((response) =>{
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      })
  },[]);
  
  
  return (
      <div className="home">
        {blogs && <BlogLists blogsData={blogs} title={"All The Blogs Here!!"} handleDelete={handleDelete}/>}
      </div>
  );
}
 
export default Home;
