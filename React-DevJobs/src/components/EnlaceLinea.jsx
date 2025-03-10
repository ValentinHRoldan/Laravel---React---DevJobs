import React from 'react'
import { Link } from 'react-router-dom'

export default function EnlaceLinea({children, link}) {
  return (
    <Link className='underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800' to={link}>{children}</Link>
  )
}
