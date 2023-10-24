import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between text-4xl items-center bg-[#21222A] p-8">
        <div className="flex items-center gap-5">
            <img src="/react-icon.png" className="w-24"/>
            <h1 className='font-bold text-cyan-400'>ReactFacts</h1>
        </div>
        <p className='text-white'>React Course - Project 1</p>
    </nav>
  )
}

export default Navbar