import { redirect } from 'next/navigation';
import Navlink from '../components/NavLinks';

export default async function ContactLayout(
  {children}:{
    children:React.ReactNode
  }
){

  return(
    <section>
      <span>template Contact Layout</span>
      <Navlink />
      {children}
    </section>
  )
}