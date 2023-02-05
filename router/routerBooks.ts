import { Router } from "express";
import { getBook, postBook,searchBooks,myViews } from "../controller/bookController";
import { coverUpload } from "../config/multer";



const bookrouter = Router()

bookrouter.route("/newBooks").post(coverUpload,postBook)
bookrouter.route("/getall").get(getBook)
bookrouter.route("/search").get(searchBooks);
bookrouter.route("/views/:id").patch(myViews);


export default bookrouter