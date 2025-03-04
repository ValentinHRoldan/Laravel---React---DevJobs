import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-white'>
        <p className='block h-9 text-3xl w-auto fill-current text-gray-800 dark:text-gray-200 text-center'>
            Dev<span class="font-extrabold">Jobs</span> 
        </p>
        <div className='mt-28'>
            <Outlet/>
        </div>
    </div>
  )
}
