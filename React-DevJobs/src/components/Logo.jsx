import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className='w-30 h-30 fill-current text-white text-5xl hover:text-gray-300 text-center cursor-pointer' to='/'>
    Dev<span class="font-extrabold">Jobs</span> 
    </Link>
  )
}
