import express, { Request, Response} from "express";
import mongoose from "mongoose";

const app = express();

const db = await mongoose.connect(
    'mongodb+srv://jproariovald:2pLvp3rn36w8mhP9@joel0.nqcaxwg.mongodb.net/?retryWrites=true&w=majority');

app.get("/", (req: Request, res: Response) => {
    res.send("Ola mundo!");
});

app.listen(5000);