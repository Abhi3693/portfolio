import React from 'react';
import { BsFillPencilFill, BsBook } from 'react-icons/Bs';

function Blog() {
  return (
    <section id='blogs' className='container'>
      <div className='row text-center text-light'>
        <div className='col'>
          <BsFillPencilFill className='icons fs-1 fw-bold text-light' />
          <h2 className='fs-1 fw-bold my-5'>My Blog Posts</h2>
          <p className='fs-6 w-75 text-white-50 my-2 mx-auto'>
            “I write to discover what I know.” ― Flannery O'Connor <br />I have
            written a few blog post to discover what I know and will continue to
            do so as I learn and explore more.
          </p>
        </div>
      </div>
      <div className='row justify-content-between text-center my-5'>
        <div className='blog-card col-lg-5 my-3'>
          <BsBook className='text-center text-white-50 fs-2' />
          <h5 className='text-white-50'>React Icons Tutorial</h5>
          <p className='text-white-50'>
            Icons are important part of web structure.It makes our web page use
            friendly. Using icons in javascript was quit easy but in React i
            went through small struggle to use icons. So here i have come with
            easy solution to use icons in React App....
          </p>
          <a
            className='read-blog text-light fs-5'
            href='https://medium.com/@abhi.mane3693/react-icons-tutorial-727f92e6500e'
            target='_blank'
          >
            Read Blog
          </a>
          <span className='text-white-50'>PUBLISHED ON : Medium</span>
        </div>
        <div className='blog-card col-lg-5 my-3'>
          <BsBook className='text-center text-white-50 fs-2' />
          <h5 className='text-white-50'>
            Introduction to Unix, Git and Github
          </h5>
          <p className='text-white-50'>
            Unix is family of operating system. It is multi-user, multi-tasking
            system for servers, desktops and laptops....
          </p>
          <a
            className='read-blog text-light, fs-5'
            href='https://hashnode.com/post/introduction-to-unix-git-and-github-cks045v2308jiees17e9vdwxv'
            target='_blank'
          >
            Read Blog
          </a>
          <span className='text-white-50'>PUBLISHED ON : Hashnode</span>
        </div>
      </div>
    </section>
  );
}

export default Blog;
