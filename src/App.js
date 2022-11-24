import React, { useState } from "react"
import './App.css';
import Num from "./components/Num"

function App() {

  // id generate gareko 
  function randomGenerate() {
    let rand = Math.random();
    return rand;
  }


  const [dice, setDice] = React.useState(Newdice())  //usestate in newdice


  const [tanzies, setTanzies] = React.useState(false)  
  

  React.useEffect(()=>{
    const all = dice.every(map=> map.isHold)
    const first= dice[0].value
    const allValue=dice.every(map=> map.value===first)

    if(all&& allValue){
      setTanzies(true)
      console.log("you win!")
    }
  },[dice])


//select gari sake paxi baki ko number lai resuffle
  function create() {
    return{
      value:Math.ceil(Math.random()*6),
      isHold:false,
      id:randomGenerate()
    }
  }
  






  // creating  random 6 numbers 
  function Newdice() {
    const newArr = []
    for (let i = 0; i < 10; i++) {
      let random = randomGenerate();
      newArr.push(create())
    }
    return newArr
  }





// line 17 bata create lerako ani map garelo
  function Roll() {
    if(!tanzies){

      setDice(old => old.map(maps => {
        return maps.isHold ?
          maps :
          create()
      }))
    }else{
      setTanzies(false)
      setDice(Newdice)

    }
  }






//eeutai id bhako lai green le hold gareko
  function hold(id) {
    setDice(old => old.map(map => {
      return map.id === id ?
        { ...map, isHold: !map.isHold } :
        map
    }))
  }



// map gareko
  const NumElement = dice.map(mapping => <Num value={mapping.value} isHold={mapping.isHold} holds={() => hold(mapping.id)} key={mapping.id} />)







// body
  return (
    <main>
      <h1 className="head">Tenzies</h1>
      <p className="rule">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="game">
        {NumElement}
      </div>
      <button 
       className="roll"
        onClick={Roll}>
          {tanzies? "New Game" : "Roll"}
          </button>
    </main>
  );
}

export default App;

