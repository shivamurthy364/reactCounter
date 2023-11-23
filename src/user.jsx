import React from "react";

function User(props){
   return(
    <>
    <h1> My name is {props.name}</h1>
    <h2> I am a {props.expertise}</h2>
    </>
   );
}

export default User;