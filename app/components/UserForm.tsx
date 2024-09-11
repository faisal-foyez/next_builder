import {createAction} from '@/actions/action';

export default function SubmissionForm () {
  return (
    <form action={createAction}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" className='w-28 h-5 text-black'/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}