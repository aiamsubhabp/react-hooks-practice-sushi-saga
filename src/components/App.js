import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(API)
      .then (r => r.json())
      .then (sushis => {
        setSushis(sushis)
      })
  }, [])

  function handleEatSushi(eatenSushi) {
    const updatedSushis = sushis.map((sushi) => {
      if (sushi.id === eatenSushi.id) return {...sushi}
      return sushi
    })

    setSushis(updatedSushis)
  }


  


  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        onEatSushi = {handleEatSushi}
      />
      <Table />
    </div>
  );
}

export default App;
