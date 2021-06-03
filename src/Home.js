import React, {  useState, useEffect } from 'react';
import BlogLists from './BlogLists';

const Home = () => {
  
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);

  const dFlex = {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'80vh'
  }

  const spinner = {
    backgroundColor:'#2A9876',
    color:'#fff',
    borderRadius:'5px',
    padding:'10px'
  }

 
  useEffect(() =>{
    fetch('http://localhost:8000/blogs')
      .then((response) =>{
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      })
  },[]);
  
  
  return (
      <div className="home">
        { isPending && 
          <div style={dFlex}>
              <span style={spinner}>loading....</span>
          </div>
        }
        {blogs && <BlogLists blogs={blogs} title={"All The Blogs Here!!"}/>}
      </div>
  );
}
 
export default Home;
