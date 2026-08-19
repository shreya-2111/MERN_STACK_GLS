import express from "express"
import { getProduct } from "../controller/productcontroller.js"
const router = express.Router()

router.get("/",getProduct)
router.post("/",(req,res)=>{})
// router.put("/:id")
// router.delete("/:id")

export default router