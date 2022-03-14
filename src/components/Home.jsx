import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import { IoRocketOutline } from 'react-icons/io5/index';
import PortfolioCard from './PortfolioCard';
function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const fetchProjects = await fetch(
        'https://hanana20.sg-host.com/wp-json/wp/v2/projects/'
      );
      const response = await fetchProjects.json();
      setProjects(response);
    };
    getProjects();
  }, []);
  return (
    <>
      <Hero />
      <section className='why' id='why'>
        <h2 className='section__heading'>Why should you hire us?</h2>
        <div className='why__list'>
          <ul className='why__block'>
            <li className='why__item'>
              <IoRocketOutline />
              <span className='why__reason'>Reason 1</span>
            </li>
            <li className='why__item'>
              <IoRocketOutline />
              <span className='why__reason'>Reason 2</span>
            </li>
            <li className='why__item'>
              <IoRocketOutline />
              <span className='why__reason'>Reason 3</span>
            </li>
            <li className='why__item'>
              <IoRocketOutline />
              <span className='why__reason'>Reason 4</span>
            </li>
          </ul>
        </div>
        <p className='why__text'>
          We have delivered project for big household names. We can help you
          achieve a strong web presence using same methods.
        </p>
      </section>
      <section className='portfolio' id='portfolio'>
        <h2 className='section__heading'>Checkout our work!</h2>
      </section>
      <section className='portfolio__list'>
        {projects &&
          projects.map((project) => (
            <>
              <PortfolioCard key={project.id} data={project} />
            </>
          ))}
      </section>
      <section className='contact'>
            
      </section>
    </>
  );
}

export default Home;
