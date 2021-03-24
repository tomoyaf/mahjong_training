function p2message(p) {
  if (p < 0.6) {
    return "……頑張りましょう！";
  }
  if (p < 0.8) {
    return "優秀です！";
  }
  if (p < 0.9) {
    return "とても優秀です！";
  }
  return "完璧です！";
}

function p2rate(p) {
  const low = 1500;
  const high = 2000;
  const th = 0.5;
  if (p < th) {
    return low;
  }
  const rate = low + ((high - low) * (p - th)) / (1.0 - th);
  return Math.floor(rate);
}

export default (req, res) => {
  const { ncorrect, nquestion } = req.query;
  if (!(ncorrect && nquestion)) {
    res.status(200).json("error");
  } else {
    const p = ncorrect / nquestion;
    const message = p2message(p);
    const rate = p2rate(p);

    res.status(200).json({ message, rate });
  }
};
