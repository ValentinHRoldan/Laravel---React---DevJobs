import React from 'react'

export default function Login() {
  return (
    <div>
        <form method="POST" action="">
            <p class="text-center text-white text-2xl mt-1 mb-5">Login</p>
            {/* <!-- Email Address --> */}
            <div>
                {/* <x-input-label for="email" :value="__('Correo')" />
                <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                <x-input-error :messages="$errors->get('email')" class="mt-2" /> */}
            </div>

            {/* <!-- Password --> */}
            <div class="mt-4">
                {/* <x-input-label for="password" :value="__('Contraseña')" />

                <x-text-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required autocomplete="current-password" />

                <x-input-error :messages="$errors->get('password')" class="mt-2" /> */}
            </div>

            {/* <!-- Remember Me --> */}
            <div class="block mt-4">
                <label for="remember_me" class="inline-flex items-center">
                    <input id="remember_me" type="checkbox" class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800" name="remember"/>
                    <span class="ms-2 text-sm text-gray-600 dark:text-gray-400"></span>
                </label>
            </div>

            <div class="flex justify-between my-4">
                {/* <x-link :href="route('password.request')">
                    ¿Olvidaste tu contraseña?
                </x-link>   
                <x-link :href="route('register')">
                    Crear Cuenta
                </x-link>      */}
            </div>
            {/* <x-primary-button class="w-full justify-center">
                {{ __('Iniciar Sesion') }}
            </x-primary-button> */}
        </form>        
    </div>
  )
}
