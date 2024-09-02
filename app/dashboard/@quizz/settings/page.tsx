import { wait } from "@/utils/util"

export default async function Quizz () {
  await wait(1000);
  return (
    <div className="flex justify-center items-center w-1/3 h-40 border">
      Quizz page
    </div>
  )
}