"use client";

import Link from "next/link";
import useSWR from "swr";
import JokeResponse from "@/types/jokeResponse";

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    return r.json();
  });

const GetRandomDadJoke = async (): Promise<JokeResponse> => {
  const { data, error } = useSWR(
    `${process.env.API_TARGET_URL}/jokes/random`,
    fetcher
  );

  return data as JokeResponse;
};

export default async function Home() {
  const jokeData = GetRandomDadJoke();
  const [joke] = await Promise.all([jokeData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl items-center lg:flex">
        <h1>{joke.Joke}</h1>
      </div>
      <div className="max-w-5xl items-center lg:flex">
        <h1>
          Looking to get a daily dose of dad jokes right to your inbox? Click
          the button to sign up!
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5">
          <Link href="/subscribe">Subscribe</Link>
        </button>
      </div>
    </main>
  );
}
