import React from 'react'
import MailSvg from '../assets/svg/Mail'
import IconEditDataSvg from '../assets/svg/IconEditData'
import { useRegister } from '../context'
import { useNavigate } from 'react-router-dom';

const WelcomeUser = () => {
  const navigate = useNavigate();
  const {user} = useRegister()

  const handleEditUser = () => {
    navigate('/register')
  }

  return (
    <div className='w-72 md:w-[468px] md:h-[237px] p-4 md:p-9 gri bg-white rounded-md'>
      <div className="flex flex-col space-y-1 md:space-y-4 ">
        <div className="md:flex text-center items-center gap-2">
          <div>
            <h1 className="font-bold text-base md:text-3xl">Bem-vindo, {user.name}</h1>
            <div className="flex items-center gap-2">
              <MailSvg />
              <p className="text-center">{user.email}</p>
            </div>
          </div>
          <div>
            <button onClick={handleEditUser} >
              <IconEditDataSvg className='w-8 md:w-20 '/>
            </button>
          </div>
        </div>
        <p className="text-center text-xs md:text-sm">Com alegria, damos as boas-vindas a Nova Concursos! Estamos comprometidos em ajudá-los a alcançar seus objetivos acadêmicos e profissionais, oferecendo recursos de qualidade, suporte excepcional e uma comunidade acolhedora.</p>
      </div>
    </div>
  )
}

export default WelcomeUser