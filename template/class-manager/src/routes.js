import Register from './Pages/Register'
import Login from './Pages/Login'

export default [
    {
      path: "/",
      exact: true,
      component: Register
    },
    {
      path: "/login",
      exact: true,
      component: Login
    }
]