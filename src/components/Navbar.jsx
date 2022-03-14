import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className='navbar'>
      <p className='brand'>WSKH</p>
      <ul className='navbar__links'>
        <Link
          className='link'
          to='why'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Why us
        </Link>
        <Link
          className='link'
          to='portfolio'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Our Work
        </Link>
        <Link
          className='link'
          to=''
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Get in touch
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
