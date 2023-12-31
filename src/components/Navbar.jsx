import { NavLink } from "react-router-dom"
import { Canvas } from '@react-three/fiber'
import viteLogo from '/vite.svg'
import Golfball from '../models/Golfball'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
        <span className="flex text-lg gap-7 font-large">
          {/* <Canvas className="h-10 w-10">
          <Golfball /> 
          </Canvas> */}
            <img src={viteLogo} alt='logo' className='w-18 h-18 object-contain' />
            Thomas Crowe
        </span>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar