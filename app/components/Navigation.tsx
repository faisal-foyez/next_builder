import Link from 'next/link';

export default function Navigation(){
  return(
    <ul className='flex flex-row gap-5'>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dashboard/about">About</Link>
      </li>
      <li>
        <Link href="/dashboard/price">Price</Link>
      </li>
      <li>
        <Link href="/dashboard/settings">Dashboard Settings</Link>
      </li>
      <li>
        <Link href="/about">Dashboard About</Link>
      </li>
    </ul>
  )
}