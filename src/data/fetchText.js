const fetchText = () => {
  return fetch(
    "//madlibz.herokuapp.com/api/random?minlength=5"
  ).then((response) => response.json());
};
export default fetchText;
