import React from 'react';

const Nav = (props) => {
  return (
    <nav>
      <div>
        <span>Jackson Bates </span>
        <button onClick={props.handleAbout}>About</button>
        <button onClick={props.handleWork}>Work</button>
        <button onClick={props.handleContact}>Contact</button>
      </div>
    </nav>
  )
};

export default Nav;