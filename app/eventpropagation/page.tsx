'use client';

export default function EventPropagation () {
  
  return (
    <div onClick={()=>{alert('hello')}}>
      <button onClick={(e)=>{
        e.stopPropagation();
      }}>One</button>
      <button onClick={(e)=>{e.stopPropagation();}}>Two</button>
    </div>
  )
}