import { wait } from "@/utils/util";

export default async function ContactMailLayout(
  {children}:{
    children:React.ReactNode
  }
){
  await wait(5000)

  return(
    <section>
      <span>Contact Mail Layout</span>
      {children}
    </section>
  )
}