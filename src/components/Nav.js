import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <span>Jackson Bates</span>
      <div>
        <Link to='/'>About</Link> | 
        <Link to='/work'>Work</Link> | 
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
};

export default Nav;