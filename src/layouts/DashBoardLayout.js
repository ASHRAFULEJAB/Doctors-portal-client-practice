import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../shared/Header/Header'

const DashBoardLayout = () => {
  return (
    <div>
      <Header></Header>

      <div className='drawer drawer-mobile'>
        <input id='dashBoard-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <Outlet></Outlet>
          {/* <label
            htmlFor='dashBoard-drawer'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label> */}
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashBoard-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
            <li>
              <Link to='/dashboard'>My Appionments</Link>
            </li>
            <li>
              <Link to='/dashboard/allusers'>All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout