import React from 'react';

const newBlogStyle = {
  color:"white",
  backgroundColor:"#2A9876",
  borderRadius: "8px"
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <h1>
          The Dojo <span>Blog</span>
        </h1>
      </a>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={newBlogStyle}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;