import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return  (
     <div className="main-header">
        <ul> 
            <li> Home </li>
            <li> Counter</li>
            <li> About </li>
        </ul>
     </div>
    );
}

export default Header;