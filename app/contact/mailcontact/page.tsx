import { Metadata } from "next";

export const metadata:Metadata = {
  title:'mailcontact'
}

export default function ContactMail () {
  console.log('rendering mail contact');
  return (
    <div className="h-48 w-96 border bg-yellow-900">
      Contact Mail
    </div>
  )
}