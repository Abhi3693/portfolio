import React from 'react';
import { GiAbstract029 } from 'react-icons/gi';
import { FaReact, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import { SiRedux, SiMongodb, SiSass } from 'react-icons/si';

function Skills() {
  return (
    <section id='skills'>
      <div className='row text-center text-light'>
        <div className='col'>
          <GiAbstract029 className='fs-1 fw-bold ' />
          <h2 className='fs-1 fw-bold my-5'>Skills & Technologies</h2>
          <p className='fs-6 w-75 text-white-50 my-2 mx-auto'>
            "Growth occurs when individuals confront problems, struggle to
            master them, and through that struggle develop new aspects of their
            skills, capacities, views about life." — Carl R. Rogers
          </p>
          <p className='fs-6 w-75 text-white-50 my-2 mx-auto'>
            I confronted the problems of being a non-tech graduate, struggled
            through the challanges and developed following skills and is now
            continuously striving to add more to the list
          </p>
        </div>
      </div>
      <div className='row text-center text-light my-5'>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <FaReact className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>React</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <GrNode className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>Node Js</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <AiFillHtml5 className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>HTML</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <FaCss3Alt className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>CSS</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <SiRedux className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>Redux</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <DiJavascript1 className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>JavaScript</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <SiMongodb className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>MongoDB</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <SiSass className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>SCSS / SASS</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <FaGitAlt className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>Git</h4>
        </div>
        <div className='col-lg-3 mt-4 col-md-6 col-sm-6 col-xs-6'>
          <BsBootstrap className='skill-icon fs-2' />
          <h4 className='text-center text-light my-3 fs-5'>Bootstrap</h4>
        </div>
      </div>
    </section>
  );
}

export default Skills;
