import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      &copy; All rights reserved 🚀 webservices by kh 🚀 {year}
    </footer>
  );
}

export default Footer;
