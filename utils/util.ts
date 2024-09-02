export async function wait(miliseconds:number){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('');
    },miliseconds)
  })
}
