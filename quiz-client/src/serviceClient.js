async function fetchData(callback) {
  const res = await fetch("/");
  res
    .json()
    .then(res => callback(res))
    .catch(err => console.log(err));
};

export { fetchData };