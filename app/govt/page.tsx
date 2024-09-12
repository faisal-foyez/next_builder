import Image from "next/image";
import govtImg from '@/assets/images/interim_govt.jpeg';

export default function Govt () {
  
  return (
    <div>
      {/* <Image 
        src={govtImg}
        alt="Interim Govt. Advisors Image"
      /> */}
      <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </div>
  )
}