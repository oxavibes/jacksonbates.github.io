import React from 'react';

const Nav = (props) => {
  return (
    <nav>
      <div className='nav__link-block'>
         <button className='nav__link' onClick={props.handleAbout}>About</button>
        / <button className='nav__link' onClick={props.handleWork}>Work</button>
        / <button className='nav__link' onClick={props.handleContact}>Contact</button>
        
      </div>
    </nav>
  )
};

export default Nav;