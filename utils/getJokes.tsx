export default async function getJokes (){
  const randomJoke = await fetch('https://api.chucknorris.io/jokes/random',);
  return await randomJoke.json();
}