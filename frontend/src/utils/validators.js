export const validateLoginForm = ({ email, password }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, password, username }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);

  return isEmailValid && isPasswordValid && isUsernameValid;
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const validateUsername = (username) => {
  return username.length >= 3;
};

const validateEmail = (email) => {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailPattern.test(email);
};
