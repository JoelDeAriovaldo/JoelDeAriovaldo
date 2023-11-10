 import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Deck from "./models/Deck";

const PORT = 5000;


const app = express();
app.use(cors({
    origin: "*",
  })
);

app.get("/decks", async (req: Request, res: Response) => {
  //TODO: buscar todos os decks e enviar de volta ao usuário
  //1.como buscamos os decks de mongo?
  const decks = await Deck.find();
  //2.como enviamos de volta o array para a interface do usuário?
  res.json(decks);
});

app.get("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose
  .connect(process.env.MONGO_URL ?? "").then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
