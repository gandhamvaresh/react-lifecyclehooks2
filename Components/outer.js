import React, {useContext  } from "react";
import messageContext from '../context/messageContext';
import Inner from './inner'

function Outer() {
    return <>
    <h2>Outer page :  {useContext(messageContext)[0]}</h2>
    <Inner/>
     </>;
}

export default Outer;