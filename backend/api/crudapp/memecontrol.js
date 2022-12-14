const MemeService = require("./memeserv");

exports.getAllMemes = async (req, res) => {
  try {
    const Memes = await MemeService.getAllMemes();
    res.json({ data: Memes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMeme = async (req, res) => {
  try {
    const Meme = await MemeService.createMeme(req.body);
    res.json({ data: Meme, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMemeById = async (req, res) => {
  try {
    const Meme = await MemeService.getMemeById(req.params.id);
    res.json({ data: Meme, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMeme = async (req, res) => {
  try {
    const Meme = await MemeService.updateMeme(req.params.id, req.body);
    res.json({ data: Meme, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMeme = async (req, res) => {
  try {
    const Meme = await MemeService.deleteMeme(req.params.id);
    res.json({ data: Meme, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};