import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import { IoRocketOutline } from 'react-icons/io5/index';
import PortfolioCard from './PortfolioCard';
function Home() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

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

  const contactFormHandler = (e) => {
    e.preventDefault();
  };
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
      <section className='contact' id='contact'>
        <div className='contact__form-section'>
          <h2 className='section__heading'>Drop us a line</h2>
          <form className='contact__form' onSubmit={contactFormHandler}>
            <label className='form__label'>
              Your name
              <br />
              <input
                type='text'
                className='form__input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className='form__label'>
              Email
              <br />
              <input
                type='email'
                className='form__input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className='form__label'>
              How can we be at your assistance?
              <br />
              <textarea
                rows='10'
                className='form__textarea'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
            <button className='btn'>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
