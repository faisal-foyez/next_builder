import axios from "axios";

export default async function getJokesAxios (){
  const randomJokeRes = await axios.get('https://api.chucknorris.io/jokes/random');
  return randomJokeRes.data;                                                                                                                                                                                                                                                                                                  
}