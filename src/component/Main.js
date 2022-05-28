import React from 'react';

import Project from './Projects';
import Skills from './Skills';
import Blog from './Blog';
import Contact from './Contact';

function Main() {
  return (
    <>
      <div className='container px-4' id='container'>
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
                target='_blank'
                rel='noreferrer'
              >
                Download CV
              </a>
            </div>
          </div>
          <div className='col-lg'>
            <img className='img-fluid' src='./images/coding2.png' alt='' />
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
