import mongoose from "mongoose";

const URL = "mongodb://localhost/project"

const lifeUrl: string =
  "mongodb+srv://SeraphinaDB:Judy200deo20@cluster0.59l2guk.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(lifeUrl);

mongoose.connection.on("open",()=>{
    console.log("Database is connected")
})

.once("error",(error)=>{
    console.log(`Failed to connectg to the database ${error}`)
});