import React, {useContext } from "react";
import messageContext from '../context/messageContext';

function Inner() {
  const [message,setMessage] = useContext(messageContext);
      return <><h3> Inner page </h3>
     <button onClick={()=> setMessage(Math.random().toString()) }> Radom Message</button>
     </>;
}

export default Inner;