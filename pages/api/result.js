export default (req, res) => {
  const { ncorrect, nquestion } = req.query;
  if (!(ncorrect && nquestion)) {
    res.status(200).json("error");
  } else {
    const rate = ncorrect / nquestion;
    let message = "完璧です！";
    if (rate < 0.6) {
      message = "……頑張りましょう！";
    } else if (rate < 0.8) {
      message = "優秀です！";
    } else if (rate < 0.9) {
      message = "とても優秀です！";
    }
    res.status(200).json({ message });
  }
};
