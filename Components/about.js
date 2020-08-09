import React, { useContext } from "react";
import Outer from './outer'
import messageContext from '../context/messageContext';

function About() {
    return <div><h1>About page:   {useContext(messageContext)}</h1>
    <Outer />
      </div>;
}

export default About;