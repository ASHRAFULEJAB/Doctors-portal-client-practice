import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { DoctorContext } from '../context/AuthProvider'
import useAdmin from '../hooks/useAdmin'
import Header from '../shared/Header/Header'

const DashBoardLayout = () => {
  const { user } = useContext(DoctorContext)
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Header></Header>

      <div className='drawer drawer-mobile'>
        <input
          id='dashBoard-drawer'
          type='checkbox'
          className='drawer-toggle'
        />
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
          <ul className='menu p-4 w-80  text-base-content'>
            <li>
              <Link to='/dashboard'>My Appionments</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to='/dashboard/allusers'>All Users</Link>
                </li>
                <li>
                  <Link to='/dashboard/adddoctor'>Add A doctor</Link>
                </li>
                <li>
                  <Link to='/dashboard/mangedoctors'>Manage doctor Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout
