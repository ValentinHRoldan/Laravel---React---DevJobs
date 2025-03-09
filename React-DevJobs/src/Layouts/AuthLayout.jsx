import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-white'>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
