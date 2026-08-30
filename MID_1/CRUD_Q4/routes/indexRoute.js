const express = require("express");
const router = express.Router();

const { create, getp, getbyid, updatebyid, deletep } = require("../controller/indexController.js");

router.post("/",create);
router.get("/",getp);
router.get("/:id",getbyid);
router.put("/:id",updatebyid);
router.delete("/:id",deletep)


module.exports = router;