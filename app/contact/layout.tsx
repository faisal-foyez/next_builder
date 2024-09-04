import { wait } from "@/utils/util";

export default async function ContactLayout(
  {children}:{
    children:React.ReactNode
  }
){
  
  await wait(2000);

  return(
    <section>
      <span>Contact Layout</span>
      {children}
    </section>
  )
}