const MemeModel = require("../../models/Meme");

exports.getAllMemes = async () => {
  return await MemeModel.find();
};

exports.createMeme = async (Meme) => {
  return await MemeModel.create(Meme);
};
exports.getMemeById = async (id) => {
  return await MemeModel.findById(id);
};

exports.updateMeme = async (id, Meme) => {
  return await MemeModel.findByIdAndUpdate(id, Meme);
};

exports.deleteMeme = async (id) => {
  return await MemeModel.findByIdAndDelete(id);
};