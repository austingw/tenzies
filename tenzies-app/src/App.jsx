import { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(getNewDice());
  const [tenzies, setTenzies] = useState(false);

  function getNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDie());
    }
    return newDice;
  }

  function generateDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld === true ? die : generateDie();
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function checkHeld(array) {}
  /*
  function checkHeld() {
    for (let i = 0; i < array.length; i++) {
      if (array[i].value ==/= ) {
        return false;
        break;
      }
    }
    return true;
  }*/

  useEffect(() => {
    const firstDie = dice[0].value;
    const allHeld = dice.every((die) => die.isHeld);
    const sameValue = dice.every((die) => die.value === firstDie);

    if (allHeld && sameValue) {
      console.log("You won!");
      setTenzies(true);
    }
  }, [dice]);

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="game-title">Tenzies!</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container ">{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
