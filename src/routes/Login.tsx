import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'
import Input from '../components/Input'
import EyeSvg from '../assets/svg/Eye'
import { useForm } from 'react-hook-form'
import { AuthController } from '../controllers/AuthController'
import { useNavigate } from 'react-router-dom'
import { useRegister } from '../context'

type LoginFormFields = {
  email: string
  password: string
}
const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useRegister()
  const { register , handleSubmit, formState:{ errors }} = useForm<LoginFormFields>({
    defaultValues: {
      email: '',
      password: ''
    }})

  const onSubmit = (data:LoginFormFields) => {
    AuthController.login(data)
    .then((res) => {
      signIn(res)
      navigate('/register')
    }).catch((err) => {
      alert('Email ou senha inválidos')
    })}

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1'>
        <Nav />
        <div className='font-bold text-lg md:text-2xl flex items-center mt-14 justify-center'>
          <h1>Acessar e continuar</h1>
        </div>
        <div className='flex justify-center items-center'>
          <form className='flex flex-col gap-2 mt-14  w-[300px] min-h-[200px] md:w-[372px] md:min-h-[287px] p-7 bg-white rounded-lg shadow-md'>
            <label>E-mail</label>
            <Input 
              className={errors?.email ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
              type='text' 
              placeholder='Informe seu e-mail' 
              {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
              />
              {errors?.email?.type === 'required' && <span className='text-red-500'>Email obrigatório</span>}
              {errors?.email?.type === 'pattern' && <span className='text-red-500'>Email inválido</span>}

            <label>Senha</label>
            <Input 
              className={errors?.password ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
              icon={EyeSvg} 
              id='password'
              type='password' 
              placeholder='Informe sua senha' 
              {...register('password', {required: true, minLength: 6})}
            />
            {errors?.password?.type === 'minLength' && <span className='text-red-500'>Mínimo 6 caracteres</span>}
            {errors?.password?.type === 'required' && <span className='text-red-500'>Senha obrigatória</span>}


            <div className='flex items-center justify-center'> 
              <Button 
                type='button'
                text='Entrar' 
                width={130} height={46} 
                onClick={() => handleSubmit(onSubmit)()}
              />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Login