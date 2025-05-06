const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-screen bg-gradient-to-r from-black px-6 pt-[20%] md:px-24">
      <h1 className="text-2xl font-bold text-white md:text-5xl">{title}</h1>
      <p className="hidden w-1/3 py-4 text-lg text-white md:inline-block">
        {overview}
      </p>
      <div className="my-2 md:my-0">
        <button className="cursor-pointer rounded-lg bg-white py-1 md:py-4 px-3 md:px-12 text-lg font-bold text-black hover:bg-white/80">
          ▶️ Play
        </button>
        <button className="md:inline-block font-bold mx-4 hidden cursor-pointer rounded-lg bg-gray-400 p-4 px-12 text-lg">
          ❗More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
