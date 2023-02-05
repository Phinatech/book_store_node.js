import express,{Application,Response,Request} from "express"
import bookrouter from "./router/routerBooks"
import cors from "cors"

const  app:Application = express()
require("./config/db")
const port:string | number = process.env.PORT || 8000;
app.use(express.json());


app.use("/server", bookrouter);

app.use(cors(
    
));


app.get("/",(req:Request, res:Response):Response=>{
    return res.status(200).json({
        message:"server is up and running"
    });
});



app.listen(port,()=>{
    console.log(`Server is Listening: ${port}😎😎😎😊😉`);
});
