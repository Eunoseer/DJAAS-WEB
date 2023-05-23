import JokeResponse from "@/types/jokeResponse";

const GetRandomDadJoke = async (): Promise<JokeResponse> => {
  const res = await fetch(
    "https://ui7rwndg6c.execute-api.ap-southeast-2.amazonaws.com/dev/jokes/random"
  );
  return res.json();
};

export default GetRandomDadJoke;
