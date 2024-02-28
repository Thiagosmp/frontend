import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import Form from '../components/Form'

const Register = () => {

  const onSubmit = () => {
    console.log('Login')
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1 mb-32'>
        <Nav />
        <div className='font-bold text-2xl flex items-center mt-14 justify-center'>
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