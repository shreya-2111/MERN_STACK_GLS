const express = require("express");
const router = express.Router();

const { create, gete, getbyid, update } = require("../controllers/indexController.js");

router.post("/", create);
router.get("/", gete);
router.get("/:id",getbyid);
router.put("/:id",update);



module.exports = router;