const fetchText = () => {
  return fetch("//madlibz.herokuapp.com/api/random?minlength=5&maxlength=25")
    .then((response) => response.json())
    .then((data) => data);
};
export default fetchText;
