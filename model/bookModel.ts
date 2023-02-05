import mongoose from "mongoose";

interface Ebooks {
    title:string
    category:string
    coverImage:string
    summary:string
    view:[]
    ISBN:string
    author:string
    authorImage:string
    
}

interface iEbooks extends Ebooks, mongoose.Document{}

const bookSchema = new mongoose.Schema({
     title:String,
    category:String,
    coverImage:String,
    summary:String,
    view:[],
    ISBN:String,
    author:String,
    authorImage:String 
},{timestamps:true});

export default mongoose.model<iEbooks>("Books",bookSchema)