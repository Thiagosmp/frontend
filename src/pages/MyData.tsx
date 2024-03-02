import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"
import UserAdressData from "../components/UserAdressData"
import UserPersonalData from "../components/UserPersonalData."
import WelcomeUser from "../components/WelcomeUser"

const MyData = () => {
  return (
    <>
      <Nav />
      <div className='flex flex-col items-center justify-center mt-6 sm:mt-10 space-y-4 md:space-y-10'>
        <h1 className='font-bold text-lg md:text-2xl'>Meus dados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 px-4">
          <WelcomeUser />
          <UserPersonalData />
          <UserAdressData />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyData