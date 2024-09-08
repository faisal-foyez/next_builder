
interface Todo {
  userId:number;
  id:number;
  title:string;
  completed:boolean
}

export default async function SomeTodos () {
  const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await todosResponse.json();
  console.log(todos[0]);
  return (
    <div>
      {
        todos.map((todo:Todo)=>(
          <div key={todo.id}>
            {todo.title}
          </div>
        ))
      }
    </div>
  )
}