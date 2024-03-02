import React from 'react'
import { useRegister } from '../context'

const UserPersonalData = () => {
  const {user} = useRegister()
  
  return (
    <div className="bg-white rounded-md w-72 md:w-80 md:h-96 flex row-start-3 row-span-3 flex-col space-y-1 p-4 md:p-6 border-[1px] border-border">
      <h1 className="font-semibold text-base md:text-2xl mb-2">Dados Pessoais</h1>
      <label className='text-sm'>Nome</label>
      <p className="font-bold text-sm md:text-base">{user.name}</p>
      <label className='text-sm'>E-mail</label>
      <p className="font-bold text-sm md:text-base">{user.email}</p>
      <label className='text-sm'>CPF</label>
      <p className="font-bold text-sm md:text-base">{user.cpf}</p>
      <label className='text-sm'>Celular</label>
      <p className="font-bold text-sm md:text-base">{user.cel}</p>
    </div>
  )
}

export default UserPersonalData