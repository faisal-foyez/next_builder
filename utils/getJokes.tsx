export default async function getJokes (){
  const randomJoke = await fetch('https://api.chucknorris.io/jokes/random',{
    next:{revalidate:10}
  });
  return await randomJoke.json();
}