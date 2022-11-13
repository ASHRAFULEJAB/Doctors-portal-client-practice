import React from 'react'
import { Link } from 'react-router-dom'
import footer from '../../assets/images/footer.png'

const Footer = () => {
  return (
    <section>
      <footer
        className='footer p-10 '
        style={{
            background: `url(${footer})`,
            backgroundSize:'cover'
        }}
      >
        <div>
          <span className='footer-title'>Services</span>
          <Link to='/' className='link link-hover'>
            Emergency Checkup
          </Link>
          <Link to='/' className='link link-hover'>
            Monthly Checkup
          </Link>
          <Link to='/' className='link link-hover'>
            Weekly Checkup
          </Link>
          <Link to='/' className='link link-hover'>
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className='footer-title'>ORAL HEALTH</span>
          <Link to='/' className='link link-hover'>
            Fluoride Treatment
          </Link>
          <Link to='/' className='link link-hover'>
            Cavity Filling
          </Link>
          <Link to='/' className='link link-hover'>
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className='footer-title'>OUR ADDRESS</span>
          <Link to='/' className='link link-hover'>
            New York - 101010 Hudson
          </Link>
          {/* <Link to='/' className='link link-hover'>Privacy policy</Link>
          <Link to='/' className='link link-hover'>Cookie policy</Link> */}
        </div>
      </footer>
      <footer className='footer px-10 py-4 border-t footer-center  text-base-content border-base-300'>
        <div className='items-center justify-center '>
          <p>
            Doctors Portal. <br />
            @Copyright 2022 All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
