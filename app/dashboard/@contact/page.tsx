import { wait } from "@/utils/util"

export default async function Contact () {
  await wait(2000);
  return (
    <div className="flex justify-center items-center w-1/3 h-40 border">
      Contact page
    </div>
  )
}