// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import data from "./data.json";

export default (_, res) => {
  res.status(200).json(data);
};
