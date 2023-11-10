import { useEffect, useState } from 'react';
import './App.css';

type TDeck = {
  title: string;
  _id: string;
}

function App() {
  const [decks, setDecks] = useState<TDeck>([]);
  const [title, setTitle] = useState("");

  async function handleCreatedDeck(e: React.FormEvent){
    e.preventDefault();
      await fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTitle("");
  }

  useEffect(() => {
  async function fetchDecks() {
    const response = await fetch("http://localhost:5000/decks");
    const newDecks = await response.json();
    setDecks(newDecks);
  }
  fetchDecks();
}, []);

  return (
  <div className="App">
    <div className="decks">
      {decks.map((deck) => (
        <li key={deck._id}>{deck.title}</li>
      ))}
    </div>
      <form onSubmit={handleCreatedDeck}>
        <label htmlFor="deck-title">Título do deck</label>
        <input id="deck-title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
            setTitle(e.target.value);
          }}
        />
        <button>Criar Deck</button>
      </form>
  </div>
  );
}
export default App
