import { getFilesFolder } from "#db/queries/files"
import express from "express"
const filesRouter = express.Router()
export default filesRouter

//GET /files
filesRouter.route("/").get(async (req, res)=>{
const files = await getFilesFolder()
res.send(files)
})