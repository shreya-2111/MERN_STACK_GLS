const express = require("express");
const router = express.Router();

const { create , getr, getbyid, update, deleter } = require("../controllers/indexController.js");

router.post("/",create);
router.get("/",getr);
router.get("/:id",getbyid);
router.put("/:id",update);
router.delete("/:id",deleter);

module.exports = router;