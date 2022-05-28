import React, { useState } from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMediumCircle,
  AiFillPhone,
  AiFillHome,
} from 'react-icons/ai';
import { SiCodewars, SiGmail } from 'react-icons/si';
import { AiFillWechat } from 'react-icons/ai';
import { GrSquare } from 'react-icons/gr';

function Contact() {
  let initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [userInfo, setUserInfo] = useState(initialState);
  const [errMsg, setErrMsg] = useState({ name: '', email: '' });

  const validateEmail = (val) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(val);
  };

  const handleChange = ({ target }) => {
    let { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
    if (name === 'email') {
      if (!value) {
        setErrMsg({ ...errMsg, email: "Email can't be empty" });
      } else if (!validateEmail(value)) {
        setErrMsg({ ...errMsg, email: 'Email is not valid' });
      } else {
        setErrMsg({ ...errMsg, email: '' });
      }
    }
    if (name === 'name') {
      if (!value) {
        setErrMsg({ ...errMsg, name: "Name can't be empty" });
      } else if (value.length < 4) {
        setErrMsg({ ...errMsg, name: 'Name Should be more than 4 charachter' });
      } else {
        setErrMsg({ ...errMsg, name: '' });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errMsg.email && !errMsg.name) {
      alert('Message Sent!');
      setUserInfo(initialState);
    } else {
      alert('User Info is not valid!');
    }
  };

  return (
    <section id='contact'>
      <div className='row text-center text-light'>
        <div className='col'>
          <AiFillWechat className='icons fs-1 fw-bold text-light' />
          <h2 className='fs-1 fw-bold my-3'>Reach Out to Me!</h2>
          <p className='fs-6 w-75 text-white-50 my-1 mx-auto'>
            Want to discuss a project/up for any work, or just want to say
            Hello? My inbox is Open for all.
          </p>
        </div>
      </div>
      <div className='row text-light justify-item-left my-5'>
        <div className='col-lg-6'>
          <h4 className='fs-5 text-light my-3'>Internet Community</h4>
          <ul className='row contact-list'>
            <li className='col-lg-3 mt-4 col-md-6 col-sm-5 col-xs-6'>
              <a
                href='https://github.com/Abhi3693'
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub className='icons fs-4 fw-bold text-light mx-2' />
                Github
              </a>
            </li>
            <li className='col-lg-3 mt-4 col-md-6 col-sm-5 col-xs-6'>
              <a
                href='https://www.linkedin.com/in/abhijeet-mane-00b79923b/'
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillLinkedin className='icons fs-4 fw-bold text-light mx-2' />
                LinkedIn
              </a>
            </li>
            <li className='col-lg-3 mt-4 col-md-6 col-sm-5 col-xs-6'>
              <a
                href='https://hashnode.com/@Abhimane'
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <GrSquare className='icons fs-4 fw-bold text-light mx-2' />
                Hashnode
              </a>
            </li>
            <li className='col-lg-3 mt-4 col-md-6 col-sm-5 col-xs-6'>
              <a
                href='https://medium.com/@abhi.mane3693'
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillMediumCircle className='icons fs-4 fw-bold text-light mx-2' />
                Medium
              </a>
            </li>
            <li className='col-lg-3 mt-4 col-md-6 col-sm-5 col-xs-6'>
              <a
                href='https://www.codewars.com/users/abhi3693'
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <SiCodewars className='icons fs-4 fw-bold text-light mx-2' />
                CodeWars
              </a>
            </li>
            <li className='col-lg-3 mt-4 col-md-6 col-sm-5 col-xs-6'>
              <a
                href='https://twitter.com/Abhijee96440429'
                className='text-white-50'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineTwitter className='icons fs-4 fw-bold text-light mx-2' />
                Twitter
              </a>
            </li>
          </ul>
          <div className='row text-white-50 my-5'>
            <h4 className='fs-5 text-light my-3'>Contact</h4>
            <ul className='row contact-list'>
              <li className='col-lg-12'>
                <a
                  href='mailto:abhi.mane3693@gmail.com'
                  className='text-white-50 fs-5'
                >
                  <SiGmail className='mx-3' />
                  abhi.mane3693@gmail.com
                </a>
              </li>
              <li className='col-lg-12 fs-5'>
                <AiFillPhone className='mx-3' />
                7709077273
              </li>
              <li className='col-lg-12 fs-5'>
                <AiFillHome className='mx-3' />
                Pune, India
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-6 my-3'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <h5 className='text-light'>Say Hello</h5>
            <div className='my-3'>
              <label htmlFor='name' className='d-block text-white-50'>
                Name
              </label>
              <input
                className='form-input'
                type='text'
                id='name'
                name='name'
                value={userInfo.name}
                onChange={handleChange}
              />
              <span className='err-msg text-danger mt-2 d-block'>
                {errMsg.name ? errMsg.name : ''}
              </span>
            </div>
            <div className='my-3'>
              <label htmlFor='email' className='d-block text-white-50'>
                Email
              </label>
              <input
                className='form-input'
                type='text'
                name='email'
                id='email'
                value={userInfo.email}
                onChange={handleChange}
              />
              <span className='err-msg text-danger mt-2 d-block'>
                {errMsg.email ? errMsg.email : ''}
              </span>
            </div>
            <div className='my-3'>
              <label htmlFor='message' className='d-block text-white-50'>
                Message
              </label>
              <textarea
                className='form-input h-10'
                id='message'
                name='message'
                value={userInfo.message}
                onChange={handleChange}
              >
                {userInfo.message}
              </textarea>
            </div>
            <button type='submit' className='btn btn-success px-5'>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <div className=' gap-3 contact-holder'></div>
      </div>
    </section>
  );
}

export default Contact;
