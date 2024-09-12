import Image from "next/image";
import govtImg from '@/assets/images/interim_govt.jpeg';

export default function Govt () {
  
  return (
    <div>
      <Image 
        src={govtImg}
        alt="Interim Govt. Advisors Image"
      />
    </div>
  )
}