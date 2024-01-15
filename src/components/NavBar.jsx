import {NavLink} from 'react-router-dom';
const NavBar = () => {
  return (
    <header className="header">
        <NavLink to={'/'} className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>AOG</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/childhood" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Childhood
            </NavLink>
            <NavLink to="/ustogether" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                US
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar
