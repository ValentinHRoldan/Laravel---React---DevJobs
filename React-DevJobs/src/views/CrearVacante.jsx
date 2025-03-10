import React from 'react'
import InputLabel from '../components/InputLabel'
import Input from '../components/Input'

export default function CrearVacante() {
  return (
    <>
    <div className='header'>
      <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Crear Vacante
      </h2>
    </div>
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <h1 className="text-4xl font-bold text-center mb-10">Publicar Vacante</h1>
                    <div className="md:flex md:justify-center p-5">
                    <form class="md:w-1/2 space-y-5" wire:submit="crearVacante">
                      <div>
                          <InputLabel htmlFor="titulo"/>
                          <Input id="titulo" type="text" placeholder="Titulo de la vacante"/>
                          {/* <x-input-label for="titulo" />
                          <x-text-input id="titulo" class="block mt-1 w-full" type="text" placeholder="Titulo de la vacante" />
                          <x-input-error :messages="$errors->get('email')" class="mt-2" />
                          @error('titulo')
                          <livewire:mostrar-alerta :message="$message">
                          @enderror */}
                      </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </>

  )
}
