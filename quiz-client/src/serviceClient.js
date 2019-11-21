async function fetchData(callback) {
  const res = await fetch("/api/questions");
  return res.json();
};

async function fetchScores(callback) {
  const res = await fetch("/api/scores");
  return res.json();
};

export { fetchData, fetchScores };