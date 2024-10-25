import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import 'animate.css';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='h-full flex flex-col text-center justify-center mt-36'>
        <div>
          <p className=' text-7xl capitalize m-5 font-bold animate__animated animate__slideInUp'>We are a</p>
          <p className=' text-7xl capitalize text-blue-500 font-bold animate__animated animate__slideInUp'>Landing Page</p>
          <p className='text-2xl m-4 font-mono'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='text-2xl m-4 font-mono'>Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
        </div>
        <div>
          <button
            id="btn"
            className="border border-black rounded-full bg-sky-300 text-white px-4 py-2 
             hover:bg-[#0A4452] transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Button
          </button>

        </div>
      </div>
    </div>
  )
}

export default Home