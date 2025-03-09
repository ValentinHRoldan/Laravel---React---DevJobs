import React from 'react'

export default function InputLabel({$value, children}) {
  return (
    <label className='block font-medium text-sm text-gray-700 dark:text-gray-300'>
        { $value ?? children }
    </label>
  )
}
