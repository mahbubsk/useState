import React, { useState, Fragment }  from 'react';

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1, token: true },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2, token: true},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3, token:true }
  ])

  const handleBlogInfo = () => {
    if(blogs[0].token){
      setBlogs(
        [
          { title: 'I am changed', body: 'lorem ipsu......................', author: 'sk', id: 1, token:false },
          { title: 'I do not want to change', body: 'lorem ipsum dolor sit...', author: 'jk', id: 2, token:false },
          { title: 'I am a creazy guy', body: 'lorem ipsum dolor sit ammet...', author: 'mk', id: 3, token:false }
        ]
      );
      console.log(blogs);
    } else {
      setBlogs(
        [
          { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1, token: true },
          { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2, token: true },
          { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3, token:true }
        ]
      );
      console.log(blogs);
    }

  }
  
  return (
    <Fragment>
      <div className="home">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </div>
        ))}
        { blogs[0].token ? <button onClick = {handleBlogInfo}>true</button> : <button onClick = {handleBlogInfo}>false</button>}
      </div>
    </Fragment>
  );
}
 
export default Home;
