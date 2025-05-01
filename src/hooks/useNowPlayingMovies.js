import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log("ps4", json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    console.log("ps3");
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
