import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container">
      {cards.map((card)=>{
        return <div key={card.title} className="card">
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <p>By UserId:{card.userId}</p>
        </div>
      })}
      </div>
    </>
  );
}

export default App;
