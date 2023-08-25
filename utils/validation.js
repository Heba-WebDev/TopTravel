/**
 * Validates an email
 *
 * @param {string} email - The full name of the user.
 * @return {bool} Returns true if the email is a correct email and false otherwise.
 */
export const validateEmail = (email) => {
  let emailState = true;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email === "") {
    return false;
  } else {
    emailState = emailRegex.test(email);
  }
  return emailState;
};
