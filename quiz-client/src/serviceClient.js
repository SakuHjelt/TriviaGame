async function fetchData(callback) {
  const res = await fetch("/api/questions");
  return res.json();
};

export { fetchData };