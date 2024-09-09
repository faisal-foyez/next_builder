import RandomJoke from "../components/RandomJoke";
import RandomJokeAxios from "../components/RandomJokesAxios";

// export const dynamic = 'force-dynamic';

export default async function Todos () {

  return (
    <>
      <RandomJoke />
      <hr/>
      <RandomJokeAxios />
    </>
  )
}