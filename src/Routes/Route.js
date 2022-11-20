import { createBrowserRouter } from 'react-router-dom'
import AllUsers from '../Dashboard/AllUsers/AllUsers'
import Dashboard from '../Dashboard/Dashboard/Dashboard'
import MyAppionments from '../Dashboard/MyAppionments/MyAppionments'
import DashBoardLayout from '../layouts/DashBoardLayout'
import Main from '../layouts/Main'
import About from '../pages/About/About'
import Appionment from '../pages/Appionment/Appionment'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Reviews from '../pages/Reviews/Reviews'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/appionment',
        element: <Appionment></Appionment>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/reviews',
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element:<MyAppionments></MyAppionments>
      },
      {
        path: '/dashboard/allusers',
        element:<AllUsers></AllUsers>
      }
    ]
  },
])
export default router
