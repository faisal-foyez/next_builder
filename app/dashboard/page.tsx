import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
  title:'hi'
}

export default function Dashboard(){
  return(
    <div>
      <Link href="/about">about</Link>
    </div>
  )
}
