import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import 'animate.css';
import InteractiveBackground from './interactivebg';
import Button from './button';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div >
      {/* <InteractiveBackground /> */}
      <Navbar />

      <div className='h-full flex flex-col text-center justify-center mt-36'>
        <div>
          <p className=' text-7xl capitalize m-5 font-bold animate__animated animate__slideInUp text-white'>AI Powered</p>
          <p className=' text-7xl capitalize text-blue-500 font-bold animate__animated animate__slideInUp'>Marketing Assistant</p>
          <p className='text-2xl m-4 font-mono animate__animated animate__slideInUp text-white'>Unleash the power of precision marketing—drive impact like never before.</p>
          {/* <p className='text-2xl m-4 font-mono animate__animated animate__slideInUp text-white'>Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p> */}
        </div>
        <div style={{ height: '50px' }}></div>
        <div>
        <button><Link to="/main"><Button/></Link></button>

          {/* <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur   origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg rounded-xl">
            Get Started
          </button> */}

        </div>
      </div>
    </div>
  )
}

export default Home