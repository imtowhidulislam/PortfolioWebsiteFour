import React, { useState } from "react";
import { jokesdata } from "./JokesData";
import JokesShow from "./JokesShow";

const Jokes = () => {
  const [jokes, setJokes] = useState(jokesdata);
  // !! Remove Jokes form the dom..
  const removeJoke = (id) => {
    console.log(`Jokes no : ${id}`);
    const remove = jokes.filter((joke) => joke.id !== id);
    setJokes(remove);
  };
  return (
    <div>
      <h2 className="main__title">Jokes componets</h2>
      {jokes.map((joke) => {
        const { id, setup, punchline } = joke;
        return (
          <div key={id}>
            <JokesShow
              key={id}
              id={id}
              setup={setup}
              age="34"
              punchline={punchline}
              removeJoke={removeJoke}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Jokes;
