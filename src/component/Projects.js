import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import project1 from '../../public/icons/blog_app .png';
import project2 from '../../public/images/battle.png';
import project3 from '../../public/images/code_editor.png';
import project4 from '../../public/images/counter.png';
import project5 from '../../public/images/event_app.png';
import project6 from '../../public/images/memory_game.png';
import project7 from '../../public/images/shopping-cart.png';
import project8 from '../../public/images/timers.png';
import project9 from '../../public/images/todo.png';

function Project() {
  return (
    <>
      <section className='container'>
        <div className='row text-center text-light'>
          <div className='col'>
            <BsCodeSlash className='fs-1 fw-bold ' />
            <h2 className='fs-1 fw-bold my-5'>Apps / Websites I've Built</h2>
            <p className='fs-6 w-75 text-white-50 my-2 mx-auto'>
              “I hear and and I forget.I see and I remember. I do and I
              understand. ” ― Confucius <br /> I have worked on a variety of
              projects using each tech stack listed on my skills list to learn
              and understand the working of it.
            </p>
          </div>
          <div className='row my-5 text-center justify-content-center m-auto'>
            <div className='col-lg-5 text-center'>
              <CardGenerator
                img={project1}
                url={''}
                repo={''}
                title={'Blog App'}
                des={
                  'This project is a replica of real life blog app. Made using React-redux.'
                }
                type={'Full Stack App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project7}
                url={''}
                repo={''}
                title={'Shopping Cart'}
                des={'E-commerce shopping cart made using React and Redux'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project2}
                url={''}
                repo={''}
                title={'Github Battle'}
                des={
                  'A React App using Github API to show top repositories on GitHub.'
                }
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project3}
                url={''}
                repo={''}
                title={'Code Editor'}
                des={'This is a live code editor for HTML/CSS made using React'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project4}
                url={''}
                repo={''}
                title={'Counter App'}
                des={
                  'React app, with functionality of step-value and max-value'
                }
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project5}
                url={''}
                repo={''}
                title={'Event App'}
                des={
                  'React app, add and delete event and shows all events in a month'
                }
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project6}
                url={''}
                repo={''}
                title={'Memory Game'}
                des={'Memory game React app'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project8}
                url={''}
                repo={''}
                title={'Timer'}
                des={'This app is made using React'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={project9}
                url={''}
                repo={''}
                title={'Todo App'}
                des={'Todo app made using react-redux'}
                type={'React App'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;

function CardGenerator({ img, url, repo, title, des, type }) {
  return (
    <li className='card position-relative z-5 '>
      <img src={`${img}`} className='project-img img-fluid' />
      <div className='project-info-holder'>
        <div className='project-info d-flex flex-column p-3 position-absolute z-5 top-0 left-0'>
          <h4 className='text-center text-success fs-5'>{type}</h4>
          <h4 className='text-center text-white fs-5'>{title}</h4>
          <p className='text-center text-white-50 fs-6'>{des}</p>
          <div className='d-flex justify-content-center gap-4 '>
            <button className='btn btn-secondary fs-7'>
              <a href={url} className='text-white-50'>
                <AiFillEye /> View Live
              </a>
            </button>
            <button className='btn btn-secondary fs-7'>
              <a href={repo} className='text-white-50'>
                <AiFillGithub /> View Reposiratory
              </a>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
