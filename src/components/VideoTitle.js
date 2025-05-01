const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-screen bg-gradient-to-r from-black px-24 pt-[20%]">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="w-1/3 py-4 text-lg text-white">{overview}</p>
      <div>
        <button className="rounded-lg bg-white p-4 px-12 font-bold text-lg text-black cursor-pointer hover:bg-white/80 ">
          ▶️ Play
        </button>
        <button className=" font-bold mx-4 rounded-lg bg-gray-400 p-4 px-12 text-lg cursor-pointer">
          ❗More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
