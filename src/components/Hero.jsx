import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section className='hero'>
      <article className='hero__content'>
        <header className='hero__header'>Webservices by KH</header>
        <main className='hero__main'>
          <p className='hero__text'>Your modern day web development partner.</p>
          <div className='hero__btn'>
            <Link className='link btn' to='' spy={true} smooth={true} offset={50} duration={500}>
              Hire us
            </Link>
          </div>
        </main>
      </article>
    </section>
  );
}

export default Hero;
