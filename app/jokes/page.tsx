import RandomJoke from "../components/RandomJoke";

export const revalidate = 5;

export default async function Todos () {

  return (
    <>
      <RandomJoke />
      <hr/>
      <RandomJoke />
    </>
  )
}