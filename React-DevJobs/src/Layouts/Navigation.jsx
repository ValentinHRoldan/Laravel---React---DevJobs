import React from 'react'
import Enlace from '../components/Enlace'

export default function Navigation() {
    return (
        <nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="shrink-0 flex items-center">
                            <a href="">
                                <p className='block h-9 text-3xl w-auto fill-current text-gray-800 dark:text-gray-200'>
                                    Dev<span class="font-extrabold">Jobs</span> 
                                </p>
                            </a>
                        </div>
                        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <a href="" className='inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'>Mis Vacantes</a>
                        </div>
    
                        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <Enlace link={'/crear'}>Crear Vacante</Enlace>
                        </div>
                    </div>
    
                    <div class="hidden sm:flex sm:items-center sm:ms-6">
                        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <Enlace link={'/auth/login'}>Iniciar Sesion</Enlace>
                        </div>

                        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <Enlace link={'/auth/register'}>Crear Cuenta</Enlace>
                        </div>
                    </div>
                    {/* hamburguesa */}
                    <div className="-me-2 flex items-center sm:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    
            <div class="hidden sm:hidden">
                <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                    <div class="px-4">
                        <div class="font-medium text-base text-gray-800 dark:text-gray-200"></div>
                        <div class="font-medium text-sm text-gray-500"></div>
                    </div>
                </div>
            </div>
        </nav>
      )
}
