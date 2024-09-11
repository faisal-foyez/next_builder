'use server';

export async function createAction(prevState:any, formData:FormData){
  const name = formData.get("name");
  console.log(name);
  return name
}