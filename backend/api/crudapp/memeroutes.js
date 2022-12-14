const express = require("express");
const {
  getAllMemes,
  createMeme,
  getMemeById,
  updateMeme,
  deleteMeme,
} = require("./memecontrol");

const router = express.Router();

router.route("/").get(getAllMemes).post(createMeme);
router.route("/:id").get(getMemeById).put(updateMeme).delete(deleteMeme);

router.post('/memes', (req,res) => {
  let {description} =req.body;
  if (description == "") {
      res.json({
          status: "FAILED",
          message: "Empty input fields"
      })
  } else if (description.length > 2500)  {
  res.json({
      status: "FAILED",
      message: "The description must have max 2500 characters"
  });
}
})

module.exports = router;