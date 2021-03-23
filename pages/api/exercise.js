import data from "./data.json";

export default (_, res) => {
  res.status(200).json(data);
};
