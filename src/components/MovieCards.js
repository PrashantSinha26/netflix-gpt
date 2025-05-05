import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-50 pr-4">
      <img alt="Movie_Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCards;
