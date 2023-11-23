import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import './Counter.css'



function App(){
  return (
    <>
    <div className="main">
    <Header />
    <Counter />
    </div>
    
    </>
  )
}

export default App;