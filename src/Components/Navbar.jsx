import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full text-black flex justify-around py-6'>

        <div className='logo font-bold text-xl font-mono '>
           <p className='text-2xl text-green-400'>MittiLand</p>
        </div>

        <div className='flex items-center gap-10 text-green-400 font-semibold cursor-pointer '>
            <p>products</p>
            <p>Features</p>
            <p>Support</p>
            <p onClick={e=>navigate('/about')}>About</p>
        </div>

        <div className='border border-green-500 bg-green-400 text-black px-8 py-2 cursor-pointer rounded-md'>
            signin
        </div>

        

    </div>
  )
}

export default Navbar