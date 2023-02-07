const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
    cloud_name: "dhlp8hyjx",
    api_key: "798311375658833",
    api_secret: "XRjJDKnSMiVDi68qPAMk1iQK1Cg"
})

router.delete('/:public_id', async(req, res)=> {
  const {public_id} = req.params;
  try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
})


module.exports = router;

