'use client';
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Navlink () {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router  = useRouter();
  const onClickHandle = (sortOrder:string) =>{
    // router.push("https://www.google.com/", {})
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, '', `?${params.toString()}`)
  }
  return (
    <div className="flex gap-5">
      <Link prefetch className={`${pathname === "/contact/mailcontact" ? "underline text-red-500" : ""}`} href="/contact/mailcontact">mail_contact</Link>
      <Link className={`${pathname === "/contact/emailcontact" ? "underline text-red-500" : ""}`} href="/contact/emailcontact">email_contact</Link>
      <button onClick={()=>onClickHandle('asc')}>goto home</button>
    </div>
  )
}