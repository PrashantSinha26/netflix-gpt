export const checkThevalidation = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isValidPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password,
    );

  if (!isValidEmail) return "E-Mail Id is invalid";
  if (!isValidPassword) return "Password is invalid";

  return null;
};
