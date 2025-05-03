import { useSelector } from "react-redux";
import lang from "../utils/languageContants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center pt-[15%]">
      <form className="grid w-1/2 grid-cols-12 bg-black">
        <input
          type="text"
          className="col-span-9 m-4 rounded-lg bg-white p-4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 cursor-pointer rounded-lg bg-red-700 px-4 py-2 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
