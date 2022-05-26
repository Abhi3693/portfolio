import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <div className='container container-fluid'>
          <a className='navbar-brand' href='#'>
            Abhijeet Mane
          </a>
          <button
            className='btn border border-secondary navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='navbar-nav'>
              <a className='nav-link' href='#projects'>
                Projects
              </a>
              <a className='nav-link' href='#skills'>
                Skills
              </a>
              <a className='nav-link' href='#blogs'>
                Blogs
              </a>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
