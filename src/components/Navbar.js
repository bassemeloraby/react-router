import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='primery-nav'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/products'>Products</NavLink>
    <NavLink to='/users'>Users</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
    </nav>
  )
}

export default Navbar