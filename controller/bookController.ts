import { request, Request,Response } from "express";
import bookModel from "../model/bookModel";
import cloudinary from "../config/cloudinary"

const postBook = async (req:Request,res:Response):Promise<Response> => {
    try {

        const cloudimg = await cloudinary.uploader.upload(request?.file!.path)
        const {
          title,
          category,
          coverImage,
          summary,
          view,
          ISBN,
          author,
          authorImage,
        } = req.body;
         const isbn1 = Math.floor(Math.random() * 10000);
         const isbn2 = Math.floor(Math.random() * 10000);
         const isbn3 = Math.floor(Math.random() * 10000);
         const isbn4 = Math.floor(Math.random() * 10000);

        const newBook = await bookModel.create({
          title,
          category,
          coverImage: cloudimg.secure_url,
          summary,
          view,
          ISBN:`${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
          author,
          authorImage: author.chartAt(0).toUpperCase(),
        });

        return res.status(201).json({
            message:"Data Uploaded Succesfully",
            data:newBook,
        })
    } catch (error) {
       return res.status(404).json({
        message:"An error occurred",
        data: error.message
       }) 
    }
}

const getBook =async (req:Request, res:Response):Promise<Response> => {
    try {
        const allBooks = await bookModel.find()

        return res.status(200).json({
            message:"Books Succesfully gotten",
            Data:allBooks
        })
    } catch (error) {
     return res.status(404).json({
        message:"An error occured",
     })   
    }
}

const searchBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const queryData = req.query;
    const makeSearch = await bookModel.find(queryData);

    return res.status(200).json({ message: "Data Found", data: makeSearch });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const myViews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newView = await bookModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: { views: req.body.ip },
      },
      { new: true }
    );

    return res.status(200).json({
      data: newView,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export {postBook, getBook,searchBooks,myViews}