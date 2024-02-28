import IconEditDataSvg from "../assets/svg/IconEditData"
import MailSvg from "../assets/svg/Mail"
import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"

const MyData = () => {

  const handleLogin = () => {
    console.log('Login')
  }

  return (
    <>
      <Nav />
      <div className='flex flex-col items-center justify-center mt-10 space-y-10'>
        <h1 className='font-bold text-2xl'>Meus dados</h1>
        

        <div className="grid grid-cols-2 grid-rows-1 gap-6">
          <div className='w-[468px] h-[237px] p-9 gri bg-white rounded-md'>
            <div className="flex flex-col space-y-4 ">
              <div className="flex items-center gap-2">
                <div>
                  <h1 className="font-bold text-3xl">Bem-vindo, Jonatan</h1>
                  <div className="flex items-center gap-2">
                    <MailSvg />
                    <p className="text-center">natan@novaconcursos.com.br</p>
                  </div>
                </div>
                <button onClick={handleLogin}>
                  <IconEditDataSvg />
                </button>
              </div>
              <p className="text-center text-sm">Com alegria, damos as boas-vindas a Nova Concursos! Estamos comprometidos em ajudá-los a alcançar seus objetivos acadêmicos e profissionais, oferecendo recursos de qualidade, suporte excepcional e uma comunidade acolhedora.</p>
            </div>
          </div>
          <div className="bg-white w-80 rounded-md h-96 flex row-start-3 row-span-3 flex-col space-y-1 p-6 border-[1px] border-border">
            <h1 className="font-semibold text-2xl mb-2">Dados Pessoais</h1>
            <label>Nome</label>
            <p className="font-bold">Jonatan Geraldo de Souza</p>
            <label>E-mail</label>
            <p className="font-bold">natan@novaconcursos.com.br</p>
            <label>CPF</label>
            <p className="font-bold">000.000.000-00</p>
            <label>Celular</label>
            <p className="font-bold">(35) - 99158-2521</p>
          </div>
          <div className="bg-white rounded-md row-start-3 ml-14 row-span-2 w-[340px] h-[470px] mb-20 space-y-1 p-6 border-[1px] border-primary">
            <h1 className="font-semibold text-2xl mb-2">Meu Endereço</h1>
            <label>CEP</label>
            <p className="font-bold ">37.131.516</p>
            <label>Endereço</label>
            <p className="font-bold">Rua Terezinha Salles Santos, nº 47</p>
            <label>Bairro</label>
            <p className="font-bold">São Lucas III</p>
            <label>Complemento</label>
            <p className="font-bold">Casa</p>
            <label>Referência</label>
            <p className="font-bold">Próximo ao campo do América</p>
            <label>Cidade</label>
            <p className="font-bold">Alfenas</p>
            <label>Estado</label>
            <p className="font-bold">MG</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyData