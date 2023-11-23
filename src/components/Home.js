import React from "react";
import { useNavigate } from "react-router";

function Home()
{
    const navigate =useNavigate();
    const handleClick = () =>{
        navigate("/about")
    }
    return(
        <>
        <button onClick={handleClick}> Click Me</button>
        </>
       


);
}

export default Home;