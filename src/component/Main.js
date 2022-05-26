import React from 'react';

import Project from './Projects';
import Skills from './Skills';
import Blog from './Blog';
import Contact from './Contact';
import hero from '../../public/images/coding 2.png';

function Main() {
  return (
    <>
      <div className='container px-4'>
        <div className='row'>
          <div className='col-lg mt-5 d-flex flex-coloumn align-items-center'>
            <div className='text-light'>
              <h1 className=''>
                Hi, I'm Abhijeet Mane. <br />I am passionate about web <br />{' '}
                development
              </h1>
              <p className='text-light text-white-50'>
                I am a programming enthusiast a learner and a good listener. I
                have been sharpening my web development skills by building
                websites and applications for almost a year now. I love working
                with JavaScript , which is truly an amazing language to build to
                web applictaions.
              </p>
              <a
                className='btn btn-primary'
                href='https://drive.google.com/file/d/16GSkxECJJRED2Vwjksl3MN8EsfQ7y5bQ/view?usp=sharing'
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className='col-lg'>
            <img className='img-fluid' src={hero} alt='' />
          </div>
        </div>
      </div>
      <div className='container'>
        <section id='project-section ' className='py-3'>
          <Project />
          <Skills />
          <Blog />
          <Contact />
        </section>
      </div>
    </>
  );
}

export default Main;
