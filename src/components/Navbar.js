
import './../css/Navbar.css';
import LogoImage from './../assets/shared/logo.svg';

import { React, useState, useEffect, useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';



const useAutoClose = ({ setIsOpen, menu }) => {

  const handleClosure = useCallback(
    event => !menu.current.contains(event.target) && setIsOpen(false),
    [setIsOpen, menu]
  )

  useEffect(() => {
    window.addEventListener('click', handleClosure)
    window.addEventListener('focusin', handleClosure)

    return () => {
      window.removeEventListener('click', handleClosure)
      window.removeEventListener('focusin', handleClosure)
    }
  }, [handleClosure, menu])
}

function Navbar() {

  const menu = useRef();
  const [isOpen, setIsOpen] = useState(false)

  useAutoClose({ setIsOpen, menu })
  
  return (
    <>
    <nav className ="flex flex-row justify-between items-center h-24 relative">

      {/* Logo */}
      <div className="h-full left-0 text-white mr-6">
        <div className = "px-6 xl:px-16">
          <NavLink to = "/">
            <img className = "absolute mb-auto mt-auto top-0 bottom-0" src={LogoImage} alt="Logo" height="2rem"/>
          </NavLink>
        </div>
      </div>

      {/* Line between logo and right section of navbar */}
      <div className = "hidden nav-line flex-grow z-[1] ml-3 -mr-7 xl:block"></div>

      {/* Right Section */}
      <div className = "hidden xl:flex right-nav h-full w-fit pl-10 pr-24">

          <div className="flex justify-left h-full nav-items">
            
                <NavLink to = "/" className = "btn h-full flex justify-center uppercase" end>
                    <p className = "mb-auto mt-auto">
                          <span className="font-bold mr-3">01</span>Home
                    </p>
                </NavLink>

                <NavLink to = "destination" className = "btn h-full flex justify-center uppercase">
                    <p className = "mb-auto mt-auto">
                          <span className="font-bold mr-3">02</span>Destination
                    </p>
                </NavLink>

                <NavLink to = "crew" className = "btn h-full flex justify-center uppercase">
                    <p className = "mb-auto mt-auto">
                          <span className="font-bold mr-3">03</span>Crew
                    </p>
                </NavLink>

                <NavLink to = "technology" className = "btn h-full flex justify-center uppercase">
                    <p className = "mb-auto mt-auto">
                          <span className="font-bold mr-3">04</span>Technology
                    </p>
                </NavLink>
          </div>
      </div>
          
      <div className="block absolute top-8 right-11 text-white xl:hidden z-[2]">
          <button onClick= {event => {
                event.stopPropagation()
                setIsOpen(isOpen => !isOpen)
              }} 
              className="flex items-center text-4xl hover:text-gray-300 hover:border-gray-300">

            {!isOpen 
              ? <HiOutlineMenuAlt3 className='menu-icon' />
              : <AiOutlineClose className='menu-icon' />
            }
          </button>
      </div>
    </nav>
    
    <div ref = {menu} className={`${isOpen ? "right-0" : "-right-[33rem] md:-right-[40rem]"} xl:hidden z-[1] menu_phone w-8/12 md:w-1/2`}>

          <div className='text-white flex flex-col pl-9 pt-36 nav-items'>
            
            <NavLink to = "/" className = "btn h-full uppercase py-3" end>
                <p className = "mb-auto mt-auto">
                      <span className="font-bold mr-3">01</span>Home
                </p>
            </NavLink>

            <NavLink to = "destination" className = "btn h-full uppercase py-3">
                <p className = "mb-auto mt-auto">
                      <span className="font-bold mr-3">02</span>Destination
                </p>
            </NavLink>

            <NavLink to = "crew" className = "btn h-full uppercase py-3">
                <p className = "mb-auto mt-auto">
                      <span className="font-bold mr-3">03</span>Crew
                </p>
            </NavLink>

            <NavLink to = "technology" className = "btn h-full uppercase py-3">
                <p className = "mb-auto mt-auto">
                      <span className="font-bold mr-3">04</span>Technology
                </p>
            </NavLink>
          </div>
    </div>
    </>
  )
}

export default Navbar;