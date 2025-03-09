import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-white">
        {children}
        <header class="bg-white dark:bg-gray-800 shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <Outlet/>
            </div>
        </header>
    </div>
  )
}
