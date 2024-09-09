
import {createAction} from '@/actions/action';
export default function SubmissionForm () {
  const handleClick = () =>{
    createAction('jamal');
  }
  return (
    <div>
      <button onClick={handleClick}>user form</button>
    </div>

  )
}