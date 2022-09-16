import { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(getNewDice());

  function getNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(getNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} />
  ));

  return (
    <main>
      <h2 className="game-title">Tenzies!</h2>
      <div className="dice-container ">{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
