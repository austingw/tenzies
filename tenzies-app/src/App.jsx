import { useEffect, useState } from "react";
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(getNewDice());

  function getNewDice() {
    const newDice = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    return newDice;
  }

  function rollDice() {
    setDice(getNewDice());
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <main>
      <h2 className="game-title">Tenzies!</h2>
      <div className="dice-container ">{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
