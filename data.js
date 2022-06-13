const getProducts = async () => {
  try {
    const res = await axios.get("https://www.balldontlie.io/api/v1/players");
    const data = await res.json();
  } catch (err) {}
};

export default data;
