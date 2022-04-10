import express from "express";
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";

/* mongoose.connect('mongodb://0.0.0.0:27017/webdev'); */

/* mongoose.connect('mongodb+srv://webdev5610:jubilo123@cluster0.nmz9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') */

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);
