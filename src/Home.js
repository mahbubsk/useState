import React, {  useState, useEffect } from 'react';
import BlogLists from './BlogLists';

const Home = () => {
  
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


// some style used here.
  const dFlex = {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'80vh'
  }

  const spinner = {
    color:'#333',
    borderRadius:'5px',
    fontSize:'24px',
    fontWeight:'bold',
    padding:'10px',
    border:'3px dotted #2A9876'
  }

  const errorMessage = {
    color:'#ff2263',
    fontSize:'32px',
    fontWeight:'bold'
  }
  //some style used here.
  
  

//fetching data from http://localhost:8000/blogs using useEffect function. 
  useEffect(() =>{
    setInterval(() =>{
      fetch('http://localhost:8000/blogs')
      .then((response) =>{
        if(response.ok) {
          throw Error("sorry buddy!! couldn't get the data!");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) =>{
        setIsPending(false);
        setError(error.message);
        console.log(error.message);
      })
    }, 2000)
  },[]);
  

  return (
      <div className="home">
        { 
          error && 
            <div style={dFlex}>
              <span style={errorMessage}>{error}</span>
            </div> 
        }
        { isPending && 
          <div style={dFlex}>
              <span style={spinner}>loading....</span>
          </div>
        }
        {
          blogs && 
          <BlogLists blogs={blogs} title={"All The Blogs Here!!"}/>
        }
      </div>
  );
}
 
export default Home;
