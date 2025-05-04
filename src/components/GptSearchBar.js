import { useSelector } from "react-redux";
import lang from "../utils/languageContants";
import { useRef } from "react";
import Groq from "groq-sdk";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async() => {
    const groq = new Groq({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
    console.log(searchText.current.value);
    //Make an API call to GPT AI and get the movie result

    
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a best movie recommendation AI system. Give only 5 best movies",
        },
        {
          role: "user",
          content: searchText.current.value,
        },
      ],
      model: "llama-3.3-70b-versatile", // Example model, choose one available
    });
    console.log(response.choices[0]?.message?.content);
//     const response = await client.responses.create({
//   model: 'gpt-4o-mini',
//   instructions: 'You are a coding assistant that talks like a pirate',
//   input: 'Are semicolons optional in JavaScript?',
// });

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
