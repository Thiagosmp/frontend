import { useNavigate } from 'react-router-dom'
import LockSvg from '../assets/svg/Lock'
import LogoSvg from '../assets/svg/Logo'

export function Nav() {
  const navigate = useNavigate();
  return (
    <header className="flex bg-nav w-full h-[70px]">
      <div className="flex mx-[150px] w-full items-center justify-between">
        <button onClick={() => navigate('/')}>
          <LogoSvg/>
        </button>
        <div>
        </div>
        <div className='flex gap-2'>
          <LockSvg/>
          <p className='text-white'>Site 100% seguro</p>
        </div>
      </div>
    </header>
  )
}