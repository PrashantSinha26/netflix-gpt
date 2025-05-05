export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/96373166?s=400&u=86e94d8b9db54689a9e267c37c63e8e308bc21a3&v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifer: "en", name: "English" },
  { identifer: "hindi", name: "Hindi" },
  { identifer: "german", name: "German" },
];

export const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

// export const OPENAI_KEY =
//   "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";
