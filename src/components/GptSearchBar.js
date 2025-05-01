const GptSearchBar = () => {
  return (
    <div>
      <form className="m-6 bg-black p-6">
        <input
          type="text"
          className="m-4 p-4 bg-white"
          placeholder="What's movie are you looking for...!"
        />
        <button className="cursor-pointer rounded-lg bg-red-700 px-4 py-2 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
