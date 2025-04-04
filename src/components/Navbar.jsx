import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [isActive, setActive] = useState('')
  const [isToggle, setToggle] = useState(false)
  return (
    <nav className={`
        ${styles.paddingX} 
        w-full 
        flex 
        items-center 
        py-5
        fixed 
        top-0 
        z-20 
        bg-primary
      `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain rounded-3xl' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span className='text-yellow-600'>K</span>-DAI &nbsp;
            <span className='sm:block hidden'>
              | &nbsp;Face Recognition
            </span>
          </p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${isActive == link.title ? "text-white" : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={isToggle ? close : menu}
            alt="menu"
            className='object-contain cursor-pointer'
            onClick={() => {
              setToggle(!isToggle)
            }}
          />
          <div className={`${isToggle ? 'flex' : 'hidden'} black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className={`${isActive == link.title ? "text-white" : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!isToggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar