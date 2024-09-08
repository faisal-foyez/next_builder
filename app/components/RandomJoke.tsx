import getJokes from '@/utils/getJokes';
export default async function RandomJoke () {
  const joke = await getJokes();
  return (
    <div>
      {joke.value}
    </div>
  )
}