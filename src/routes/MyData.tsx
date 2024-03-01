import { useNavigate } from "react-router-dom"
import IconEditDataSvg from "../assets/svg/IconEditData"
import MailSvg from "../assets/svg/Mail"
import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"
import { useRegister } from "../context"

const MyData = () => {
  const navigate = useNavigate();
  const {user} = useRegister()

  const handleLogin = () => {
    navigate('/register')
  }

  return (
    <>
      <Nav />
      <div className='flex flex-col items-center justify-center mt-6 sm:mt-10 space-y-4 md:space-y-10'>
        <h1 className='font-bold text-lg md:text-2xl'>Meus dados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 px-4">
          <div className='w-72 md:w-[468px] md:h-[237px] p-4 md:p-9 gri bg-white rounded-md'>
            <div className="flex flex-col space-y-4 ">
              <div className="flex items-center gap-2">
                <div>
                  <h1 className="font-bold text-base md:text-3xl">Bem-vindo, {user.name}</h1>
                  <div className="flex items-center gap-2">
                    <MailSvg />
                    <p className="text-center">{user.email}</p>
                  </div>
                </div>
                <button onClick={handleLogin} >
                  <IconEditDataSvg />
                </button>
              </div>
              <p className="text-center text-xs md:text-sm">Com alegria, damos as boas-vindas a Nova Concursos! Estamos comprometidos em ajudá-los a alcançar seus objetivos acadêmicos e profissionais, oferecendo recursos de qualidade, suporte excepcional e uma comunidade acolhedora.</p>
            </div>
          </div>
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
          <div className="bg-white rounded-md md:row-start-3 md:ml-14 row-span-2 min-w-72 min-h-72 md:w-[340px] md:h-[470px] mb-20 space-y-1 p-4 md:p-6 border-[1px] border-primary">
            <h1 className="font-semibold text-base md:text-2xl mb-2">Meu Endereço</h1>
            <label className='text-sm'>CEP</label>
            <p className="font-bold text-sm md:text-base">{user.cep}</p>
            <label className='text-sm'>Endereço</label>
            <p className="font-bold text-sm md:text-base">{user.end},n°{user.num}</p>
            <label className='text-sm'>Bairro</label>
            <p className="font-bold text-sm md:text-base">{user.bairro}</p>
            <label className='text-sm'>Complemento</label>
            <p className="font-bold text-sm md:text-base">{user.comp}</p>
            <label className='text-sm'>Referência</label>
            <p className="font-bold text-sm md:text-base">{user.ref}</p>
            <label className='text-sm'>Cidade</label>
            <p className="font-bold text-sm md:text-base">{user.city}</p>
            <label className='text-sm'>Estado</label>
            <p className="font-bold text-sm md:text-base">{user.uf}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyData