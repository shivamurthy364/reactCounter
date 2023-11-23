import React, { useState } from "react";
import '../Counter.css';

function Counter(){
    let count = 0;
    const [currentstate,updatedstate ] = useState(count);
    const handleclick = () =>{
        updatedstate(currentstate + 1)

    }
    const resetstate=() =>{
        updatedstate(0)
    }
    return(
    <>
    <div className="counter_parent">    
     <div className="div-main">
     <h3> Counter</h3>
     <button onClick={handleclick}> {currentstate} </button>
     <button onClick={resetstate}> Reset</button>

    </div>
    </div>
    </>
    );

}
export default Counter;