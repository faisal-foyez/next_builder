import Link from 'next/link';
export default async function ContactLayout(
  {children}:{
    children:React.ReactNode
  }
){
  

  return(
    <section>
      <span>template Contact Layout</span>
      <div className="flex gap-5">
        <Link href="/contact/mailcontact">mail_contact</Link>
        <Link href="/contact/emailcontact">email_contact</Link>
      </div>
      {children}
    </section>
  )
}