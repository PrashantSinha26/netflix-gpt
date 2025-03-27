import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg"
          alt="Bg_Logo"
        />
      </div>
      <form className="absolute right-0 left-0 mx-auto my-34 w-3/12 rounded-lg bg-black/50 p-12 text-white">
        <h1 className="py-4 text-3xl font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className="my-4 w-full rounded-lg border-amber-100 bg-gray-800 p-2"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="my-4 w-full rounded-lg border-amber-100 bg-gray-800 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 w-full rounded-lg border-amber-100 bg-gray-800 p-2"
        />
        <button className="my-6 w-full cursor-pointer rounded-lg bg-red-700 p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already!Have a account Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
