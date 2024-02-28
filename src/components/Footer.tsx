import img1 from '../assets/img/image1.png';
import img2 from '../assets/img/image2.png';
import img3 from '../assets/img/image3.png';
import img4 from '../assets/img/image4.png';

export function Footer() {
  return (
    <div className='absolute bottom-0 left-0 w-full gap-8 bg-white p-4 flex justify-center items-center'>
      <img src={img1} width={40} alt="Obit"  />
      <img src={img2} width={65} alt="RA1000"  />
      <img src={img3} width={80} alt="Google"  />
      <img src={img4} width={80} alt="GodaDGT" />
    </div>
  );
}