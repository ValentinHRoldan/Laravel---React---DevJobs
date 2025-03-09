import React from 'react'
import InputLabel from '../components/InputLabel'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import Logo from '../components/Logo'
import EnlaceLinea from '../components/EnlaceLinea'

export default function Login() {
  return (
    <div className='min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100 dark:bg-gray-900'> 
        <Logo/>
        <div className='w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg'>
            <form method="POST" action="">
                <p class="text-center text-white text-2xl mt-1 mb-5">Login</p>
                {/* <!-- Email Address --> */}
                <div>
                    <InputLabel htmlFor='email' $value={'Correo'}/>
                    <Input id="email" type="email" name="email" required autofocus/>
                </div>

                {/* <!-- Password --> */}
                <div class="mt-4">
                    <InputLabel htmlFor='password' $value={'Contraseña'}/>
                    <Input id="password" type="password" name="password" required autofocus/>
                </div>
                <div class="flex justify-between my-4">
                    <EnlaceLinea link={'/auth/register'}>¿No tenés cuenta? Crea tu Cuenta</EnlaceLinea>
                </div>
                <PrimaryButton>
                    Iniciar Sesion
                </PrimaryButton>
            </form>        
        </div>
    </div>
  )
}
