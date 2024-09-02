"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal ({children}:{
  children:React.ReactNode
}) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(
    ()=>{
      router.back();
    },
    [router]
  );
  const onClickHandler = useCallback(
    (e:React.MouseEvent) =>{
      if(e.target === overlay.current || e.target === wrapper.current)
      onDismiss();
    },
    []
  )

  const onKeyDown = useCallback(
    (e:KeyboardEvent) =>{
      if(e.key === "Escape") onDismiss();
    },
    [onDismiss]
  )

  useEffect(()=>{
    document.addEventListener("keydown",onKeyDown);
    return () =>{
      document.removeEventListener("keydown", onKeyDown)
    }
  },[onKeyDown])

  return (
    <div
    ref={overlay}
    onClick={onClickHandler} 
    className="h-screen w-screen bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center">
      <div 
      ref={wrapper}
      className="h-auto w-auto border">
        {children}
      </div>
    </div>
  )
}