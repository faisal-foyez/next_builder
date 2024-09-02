import {wait} from '@/utils/util'
export default async function Notification () {
  await wait(3000);
  return (
    <div className="flex justify-center items-center w-1/3 h-40 border">
      Notification page
    </div>
  )
}