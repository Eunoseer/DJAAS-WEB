import GetRandomDadJoke from "@/server/GetDadJokes";
import Link from "next/link";

export default async function Home() {
  const jokeData = GetRandomDadJoke();
  const [joke] = await Promise.all([jokeData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl items-center lg:flex">
        <h1>{joke.joke}</h1>
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
