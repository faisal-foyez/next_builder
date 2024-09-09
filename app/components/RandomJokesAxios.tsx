import getJokesAxios from '@/utils/getJokesAxios';
export default async function RandomJokeAxios () {
  const joke = await getJokesAxios();
  return (
    <div>
      {joke.value}
    </div>
  )
}