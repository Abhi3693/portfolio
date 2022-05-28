import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

function Project() {
  return (
    <>
      <section id='projects' className='container'>
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
                img={'/images/blog_app.png'}
                url={'https://abhi3693-blog.netlify.app/'}
                repo={'https://github.com/Abhi3693/blog-app'}
                title={'Blog App'}
                des={
                  'This project is a replica of real life blog app. Made using React-redux.'
                }
                type={'Full Stack App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={'/images/shopping-cart.png'}
                url={'https://abhi3693-shopping-cart-app.netlify.app/'}
                repo={'https://github.com/Abhi3693/shopping-cart-app'}
                title={'Shopping Cart'}
                des={'E-commerce shopping cart made using React and Redux'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={'/images/battle.png'}
                url={'https://abhi3693-github-battle-app.netlify.app/'}
                repo={'https://github.com/Abhi3693/github-battle-using-hooks'}
                title={'Github Battle'}
                des={
                  'A React App using Github API to show top repositories on GitHub.'
                }
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={'/images/code_editor.png'}
                url={' https://abhi3693-code-editor.netlify.app/'}
                repo={'https://github.com/Abhi3693/code_editor'}
                title={'Code Editor'}
                des={'This is a live code editor for HTML/CSS made using React'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={'/images/event_app.png'}
                url={'https://abhi3693-event-app.netlify.app/'}
                repo={'https://github.com/Abhi3693/event_app'}
                title={'Event App'}
                des={
                  'React app, add and delete event and shows all events in a month'
                }
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={'/images/memory_game.png'}
                url={'https://abhi3693-memory-game.netlify.app/'}
                repo={'https://github.com/Abhi3693/memory_game'}
                title={'Memory Game'}
                des={'Memory game React app'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={'/images/timers.png'}
                url={'https://abhi3693-timer.netlify.app/'}
                repo={'https://github.com/Abhi3693/timer-and-stopwatch'}
                title={'Timer'}
                des={'This app is made using React'}
                type={'React App'}
              />
            </div>
            <div className='col-lg-5'>
              <CardGenerator
                img={'/images/todo.png'}
                url={'https://abhi3693-todo-app.netlify.app/'}
                repo={'https://github.com/Abhi3693/todo-app-react-hooks'}
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
      <img src={img} className='project-img img-fluid' alt='' />
      <div className='project-info-holder'>
        <div className='project-info d-flex flex-column p-3 position-absolute z-5 top-0 left-0'>
          <h4 className='text-center text-success fs-5'>{type}</h4>
          <h4 className='text-center text-white fs-5'>{title}</h4>
          <p className='text-center text-white-50 fs-6'>{des}</p>
          <div className='d-flex justify-content-center gap-4 '>
            <button className='btn btn-secondary fs-7'>
              <a
                href={url}
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillEye /> View Live
              </a>
            </button>
            <button className='btn btn-secondary fs-7'>
              <a
                href={repo}
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub /> View Reposiratory
              </a>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
