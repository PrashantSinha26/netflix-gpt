import { useRef, useState } from "react";
import Header from "./Header";
import { checkThevalidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validation check
    const message = checkThevalidation(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);

    if (message) return;

    // Sign-In and Sign-Up logic

    if (!isSignInForm) {
      //Sign-Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(errorMessage);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign-IN Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div >
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={BG_URL} alt="Bg_Logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute right-0 left-0 mx-auto my-34 w-full rounded-lg bg-black/50 p-12 text-white md:w-3/12"
      >
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
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-4 w-full rounded-lg border-amber-100 bg-gray-800 p-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 w-full rounded-lg border-amber-100 bg-gray-800 p-2"
        />
        <p className="text-lg font-bold text-red-500">{errorMessage}</p>
        <button
          className="my-6 w-full cursor-pointer rounded-lg bg-red-700 p-2"
          onClick={handleButtonClick}
        >
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
