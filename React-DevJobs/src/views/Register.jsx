import React from 'react'

export default function Register() {
  return (
    <div>
        <form method="POST" action="{{ route('register') }}">
            <p class="text-center text-white text-2xl mt-1 mb-5">Registro</p>
            {/* <!-- Name --> */}
            <div>
                {/* <x-input-label for="name" :value="__('Nombre')" />
                <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')"  autofocus autocomplete="name" />
                <x-input-error :messages="$errors->get('name')" class="mt-2" /> */}
            </div>

            {/* <!-- Email Address --> */}
            <div class="mt-4">
                {/* <x-input-label for="email" :value="__('Correo')" />
                <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')"  autocomplete="username" />
                <x-input-error :messages="$errors->get('email')" class="mt-2" /> */}
            </div>

            {/* <!-- Rol --> */}
            <div class="mt-4">
                {/* <x-input-label for="rol" :value="__('Rol')" /> */}
                <select name="rol" id="rol" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full">
                    <option value="" hidden>Seleccione</option>
                    <option value="1">Desarrollador - En busca de empleo</option>
                    <option value="2">Reclutador - Publicar empleo</option>
                </select>
                {/* <x-input-error :messages="$errors->get('rol')" class="mt-2" /> */}
            </div>

            {/* <!-- Password --> */}
            <div class="mt-4">
                {/* <x-input-label for="password" :value="__('Contraseña')" />

                <x-text-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                autocomplete="new-password" />

                <x-input-error :messages="$errors->get('password')" class="mt-2" /> */}
            </div>

            {/* <!-- Confirm Password --> */}
            <div class="mt-4">
                {/* <x-input-label for="password_confirmation" :value="__('Confirmar Contraseña')" />

                <x-text-input id="password_confirmation" class="block mt-1 w-full"
                                type="password"
                                name="password_confirmation"  autocomplete="new-password" />

                <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" /> */}
            </div>
    
            <div class="flex justify-between my-4"> 
                {/* <x-link :href="route('login')">
                    Ya tenés cuenta? inicia sesion
                </x-link>      */}
            </div>        
            {/* <x-primary-button class="w-full justify-center">
                {{ __('Registrate') }}
            </x-primary-button> */}
        </form>
    </div>
  )
}
