import React from 'react'
import InputLabel from '../components/InputLabel'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import Logo from '../components/Logo'
import EnlaceLinea from '../components/EnlaceLinea'

export default function Register() {
    return (
        <div className='min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100 dark:bg-gray-900'> 
            <Logo/>
            <div className='w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg'>
                <form method="POST" action="">
                    <p class="text-center text-white text-2xl mt-1 mb-5">Registro</p>
                    {/* <!-- Nombre --> */}
                    <div>
                        <InputLabel htmlFor='name' $value={'Nombre'}/>
                        <Input id="name" type="text" name="name" required autofocus/>
                    </div>
                    {/* <!-- Email Address --> */}
                    <div className='mt-4'>
                        <InputLabel htmlFor='email' $value={'Correo'}/>
                        <Input id="email" type="email" name="email" required autofocus/>
                    </div>
                    {/* <!-- Rol --> */}
                    <div className='mt-4'>
                        <InputLabel htmlFor='rol' $value={'Rol'}/>
                        <select name="rol" id="rol" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full py-2 pl-2">
                            <option value="" hidden>Seleccione</option>
                            <option value="1">Desarrollador - En busca de empleo</option>
                            <option value="2">Reclutador - Publicar empleo</option>
                        </select>
                    </div>
                    {/* <!-- Password --> */}
                    <div class="mt-4">
                        <InputLabel htmlFor='password' $value={'Contraseña'}/>
                        <Input id="password" type="password" name="password" required autofocus/>
                    </div>
                    {/* <!-- Password Confirmation --> */}
                    <div class="mt-4">
                        <InputLabel htmlFor='password_confirmation' $value={'Confirmar Contraseña'}/>
                        <Input id="password_confirmation" type="password" name="password_confirmation" required autofocus/>
                    </div>
                    <div class="flex justify-between my-4">
                        <EnlaceLinea link={'/auth/login'}>¿Ya tenés cuenta? Inicia Sesion</EnlaceLinea>
                    </div>
                    <PrimaryButton>
                        Crear Cuenta
                    </PrimaryButton>
                </form>        
            </div>
        </div>
    )
}
