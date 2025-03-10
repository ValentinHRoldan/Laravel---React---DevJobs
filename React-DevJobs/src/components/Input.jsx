import React from 'react'

export default function Input({id, type, name}) {
  return (
    <input  
        className='border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full py-2' id={id} type={type} name={name}
    />
  )
}
