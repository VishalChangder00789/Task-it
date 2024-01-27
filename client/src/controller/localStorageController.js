export const getUserDetails = () => {
  return JSON.parse(localStorage.userDetails);
};

/**
 *
 * @param {*} details
 * Takes an object with token and userId and stringify it
 */
export const sendTDetailsToLocalStorage = (details) => {
  const { token, userId } = details;
  localStorage.userDetails = JSON.stringify(details);
};
