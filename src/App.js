import React, { useState } from "react"
import './App.css';
import Num from "./components/Num"

function App() {


  function randomGenerate() {
    let rand = Math.random();
    return rand;
  }
  const [dice, setDice] = React.useState(Newdice())  //usestate in newdice

  // creating  random 6 numbers
  function Newdice() {
    const newArr = []
    for (let i = 0; i < 10; i++) {
      let random = randomGenerate();
      newArr.push({
        value: Math.ceil(Math.random() * 6),
        isHold: false,
        id: random
      })
    }
    return newArr
  }
  function Roll() {
    setDice(Newdice())
  }

  function hold(id) {
    console.log(id)
  }

  const NumElement = dice.map(mapping => <Num value={mapping.value} isHold={mapping.isHold} holds={() => hold(mapping.id)} />)

  return (
    <main>
      <div className="game">
        {NumElement}
      </div>

      <button className="roll" onClick={Roll}>ROLL</button>
    </main>
  );
}

export default App;

