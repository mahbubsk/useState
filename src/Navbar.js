import React from 'react';

const newBlogStyle = {
  color:"white",
  backgroundColor:"#f1356d",
  borderRadius: "8px"
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={newBlogStyle}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;