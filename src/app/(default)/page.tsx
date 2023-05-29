"use client";

import useSWR from "swr";
import JokeResponse from "@/types/jokeResponse";
import Hero from "@/components/hero";

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    return r.json();
  });

const GetRandomDadJoke = (): JokeResponse => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_TARGET_URL}/jokes/random`,
    fetcher
  );

  if (!error) {
    return data?.Item as JokeResponse;
  }

  return {
    Id: -1,
    Joke: "An error has occurred retrieving a joke. Sorry about that!",
  } as JokeResponse;
};

const Home = () => {
  const jokeData = GetRandomDadJoke();

  return (
    <>
      <Hero joke={jokeData?.Joke || ""} />
    </>
  );
};

export default Home;
