'use client';

export default function ErrorContact ({
  error,
  reset
}:{
  error:Error & {digest?:string},
  reset:()=>void
}) {
  
  return (
    <div>
      Contact error occured with message : <span>{error.message}</span>
    </div>
  )
}