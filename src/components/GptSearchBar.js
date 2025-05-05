import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageContants";
import { useRef } from "react";
import Groq from "groq-sdk";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const groq = new Groq({
      apiKey: process.env.REACT_APP_GROQ_SEARCH_KEY,
      dangerouslyAllowBrowser: true,
    });
    //Make an API call to GPT AI and get the movie result

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a best movie recommendation AI system. Give only 5 best movies",
        },
        {
          role: "user",
          content: searchText.current.value,
        },
      ],
      model: "llama-3.3-70b-versatile", // Example model, choose one available
    });
    //     const response = await client.responses.create({
    //   model: 'gpt-4o-mini',
    //   instructions: 'You are a coding assistant that talks like a pirate',
    //   input: 'Are semicolons optional in JavaScript?',
    // });
    const gptMovies = [...response.choices[0]?.message?.content.matchAll(/\*\*(.*?) \(\d{4}\)\*\*/g)].map(
      (match) => match[1],
    );


    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);


    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  };

  return (
    <div className="flex justify-center pt-[15%]">
      <form
        className="grid w-1/2 grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 m-4 rounded-lg bg-white p-4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 cursor-pointer rounded-lg bg-red-700 px-4 py-2 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
