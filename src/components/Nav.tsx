import { useNavigate } from 'react-router-dom'
import LockSvg from '../assets/svg/Lock'
import LogoSvg from '../assets/svg/Logo'
import { useRegister } from '../context';

export function Nav() {
  const navigate = useNavigate();
  
  const { signOut, user } = useRegister()

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <header className="flex bg-nav w-full h-[70px]">
      <div className="flex mx-[20px] gap-2 md:mx-[80px] lg:mx-[150px] w-full items-center justify-between">
        <button onClick={() => navigate('/')}>
          <LogoSvg/>
        </button>
        <div className='flex gap-2 sm:gap-4'>
          <div className='flex gap-2 items-center'>
            <LockSvg/>
            <p className='text-white text-xs'>Site 100% seguro</p>
          </div>
          {user.id && 
          <button onClick={handleSignOut}>
            <p className='text-white hover:text-primary'>Sair</p>
          </button>
          }
        </div>
      </div>
    </header>
  )
}