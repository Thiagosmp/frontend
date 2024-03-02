import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import Form from '../components/Form'

const Register = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1 mb-32'>
        <Nav />
        <div className='font-bold text-lg md:text-2xl flex items-center mt-8 md:mt-14 justify-center'>
          <h1>Complete seus dados pessoais</h1>
        </div>
        <div className='flex justify-center items-center'>
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Register