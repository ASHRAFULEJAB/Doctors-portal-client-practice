import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import About from '../pages/About/About'
import Appionment from '../pages/Appionment/Appionment'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Reviews from '../pages/Reviews/Reviews'

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
        element: <Reviews></Reviews>,
      },
    ],
  },
])
export default router
