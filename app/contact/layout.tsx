import { redirect } from 'next/navigation';
import Navlink from '../components/NavLinks';
import { Suspense } from 'react';

export default async function ContactLayout(
  {children}:{
    children:React.ReactNode
  }
){

  return(
    <section>
      <span>template Contact Layout</span>
      <Suspense fallback={<div>Navlink Loading...</div>}>
        <Navlink />
      </Suspense>
      {children}
    </section>
  )
}