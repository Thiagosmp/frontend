import React from 'react'
import { useRegister } from '../context'

const UserAdressData = () => {
  const {user} = useRegister()

  return (
    <div className="bg-white rounded-md md:row-start-3 md:ml-14 row-span-2 min-w-72 min-h-72 md:w-[340px] md:h-[470px] mb-20 space-y-1 p-4 md:p-6 border-[1px] border-primary">
      <h1 className="font-semibold text-base md:text-2xl mb-2">Meu Endereço</h1>
      <label className='text-sm'>CEP</label>
      <p className="font-bold text-sm md:text-base">{user.cep}</p>
      <label className='text-sm'>Endereço</label>
      <p className="font-bold text-sm md:text-base">{user.address},n°{user.number}</p>
      <label className='text-sm'>Bairro</label>
      <p className="font-bold text-sm md:text-base">{user.neighborhood}</p>
      <label className='text-sm'>Complemento</label>
      <p className="font-bold text-sm md:text-base">{user.complement}</p>
      <label className='text-sm'>Referência</label>
      <p className="font-bold text-sm md:text-base">{user.reference}</p>
      <label className='text-sm'>Cidade</label>
      <p className="font-bold text-sm md:text-base">{user.city}</p>
      <label className='text-sm'>Estado</label>
      <p className="font-bold text-sm md:text-base">{user.uf}</p>
    </div>
  )
}

export default UserAdressData